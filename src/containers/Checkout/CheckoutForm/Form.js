import React, { Component, Fragment } from 'react';
import classes from './Form.module.css';
import { connect } from 'react-redux';

import Input from '../../../components/UI/Input/Input';
import * as actions from '../../../store/actions/index';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../../components/axios/axios';
import Modal from '../../../components/UI/Modal/Modal';
import * as orderDate from '../../../components/OrderDate/OrderDate';

class Form extends Component {
  state = {
    orderForm: {
      firstName: {
        label: '* Enter your first name',
        elType: 'input',
        config: {
          type: 'text',
          name: 'firstName',
          id: 'firstName',
          placeholder: 'John',
        },
        rules: {
          required: true,
          emptyTextError: 'Enter your first name!',
        },
        value: '',
        validity: true,
      },
      lastName: {
        label: '* Enter your last name',
        elType: 'input',
        config: {
          type: 'text',
          name: 'lastName',
          id: 'lastName',
          placeholder: 'Doe',
        },
        rules: {
          required: true,
          emptyTextError: 'Enter your last name!',
        },
        value: '',
        validity: true,
      },
      email: {
        label: '* Enter your email address',
        elType: 'input',
        config: {
          type: 'email',
          name: 'email',
          id: 'email',
          placeholder: 'you@example.com',
        },
        rules: {
          required: true,
          emptyTextError: 'Enter your email address!',
          pattern: /^\S+@\S+\.\S+$/i,
          patternErrText:
            'The email address you entered does not appear to be valid!',
        },
        value: '',
        validity: true,
      },
      country: {
        label: '* Select your country',
        elType: 'select',
        config: {
          name: 'country',
          id: 'country',
          options: [
            { value: '', displayValue: 'Select your country' },
            { value: 'usa', displayValue: 'United States' },
            { value: 'uk', displayValue: 'United Kingdom' },
            { value: 'aus', displayValue: 'Australia' },
            { value: 'jp', displayValue: 'Japan' },
            { value: 'gh', displayValue: 'Ghana' },
            { value: 'uae', displayValue: 'United Arab Emirates' },
            { value: 'tg', displayValue: 'Togo' },
          ],
        },
        rules: {
          required: true,
          emptyTextError: 'Please select your country!',
        },
        value: '',
        validity: true,
      },
      zipCode: {
        label: '* Enter your zip code',
        elType: 'input',
        config: {
          type: 'text',
          name: 'zip',
          id: 'zip',
          placeholder: 'zip code',
        },
        rules: {
          required: true,
          emptyTextError: 'Enter your zip code!',
          minLength: 5,
          patternErrText: 'Zip code must be 5 characters long',
        },
        value: '',
        validity: true,
      },
      delivery: {
        label: '* Select your delivery preference',
        elType: 'select',
        config: {
          name: 'delivery',
          id: 'delivery',
          options: [
            { value: '', displayValue: 'Select an option' },
            { value: 'fastest', displayValue: 'Fastest Delivery' },
            { value: 'cheapest', displayValue: 'Cheapest Delivery' },
          ],
        },
        rules: {
          required: true,
          emptyTextError: 'Please select a delivery option!',
        },
        value: '',
        validity: true,
      },
    },
    formValidity: false,
    isModal: false,
  };

  checkValidity = (rules, value) => {
    let invalidEl = true;

    if (rules.required) {
      invalidEl = value.trim() !== '' && invalidEl;
    }

    if (rules.pattern) {
      invalidEl = rules.pattern.test(value) && invalidEl;
    }

    if (rules.minLength) {
      invalidEl = value.length >= 5 && invalidEl;
    }

    return invalidEl;
  };

  inputHandler = (id, event) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[id] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.validity = this.checkValidity(
      updatedFormElement.rules,
      updatedFormElement.value
    );
    updatedOrderForm[id] = updatedFormElement;

    let formValidity = true;
    for (let keys in updatedOrderForm) {
      formValidity =
        updatedOrderForm[keys].validity &&
        updatedOrderForm[keys].value.trim() !== '' &&
        formValidity;
    }

    this.setState({ orderForm: updatedOrderForm, formValidity: formValidity });
  };

  formHandler = (event) => {
    event.preventDefault();
    this.setState({ isModal: true });
  };

  dismissModalHandler = () => {
    this.setState({ isModal: false });
  };

  confirmPurchase = () => {
    let formData = {};
    for (let keys in this.state.orderForm) {
      formData[keys] = this.state.orderForm[keys].value;
    }

    const order = {
      price: this.props.price,
      orders: this.props.orders,
      orderData: formData,
      userId: this.props.userId,
      date:
        orderDate.months[orderDate.date.getMonth()] +
        ' ' +
        orderDate.date.getFullYear(),
    };

    this.props.onPurchase(order, this.props.token);
  };

  render() {
    let formInput = [];
    let btnText = 'Continue';

    for (let keys in this.state.orderForm) {
      formInput.push({ id: keys, config: this.state.orderForm[keys] });
    }

    if (this.props.loading) {
      btnText = <i class="fas fa-spinner fa-lg fa-spin"></i>;
    }

    return (
      <Fragment>
        <Modal
          isModal={this.state.isModal}
          dismissModal={this.dismissModalHandler}
        >
          <p className={classes.ModalText}>Continue with the order?</p>
          <div className={classes.ModalActions}>
            <button
              className={classes.Cancel}
              onClick={this.dismissModalHandler}
            >
              Cancel
            </button>
            <button className={classes.Continue} onClick={this.confirmPurchase}>
              {btnText}
            </button>
          </div>
        </Modal>
        <form className={classes.Form} onSubmit={this.formHandler}>
          <h2>Please fill this form!</h2>
          <div className={classes.InputGroup}>
            {formInput.map((input) => {
              return (
                <Input
                  key={input.id}
                  class={classes.FormGroup}
                  labelClass={classes.Label}
                  label={input.config.label}
                  inputClass={classes.Input}
                  elType={input.config.elType}
                  elConfig={input.config.config}
                  value={input.config.value}
                  changed={this.inputHandler.bind(this, input.id)}
                  validity={input.config.validity}
                  invalid={classes.Invalid}
                  errorClass={classes.Error}
                  emptyInputErrorText={input.config.rules.emptyTextError}
                  patternErrorText={input.config.rules.patternErrText}
                  required={input.config.rules.required}
                />
              );
            })}
          </div>
          <div className={classes.FormFooter}>
            <button
              className={classes.SubmitBtn}
              disabled={!this.state.formValidity}
            >
              Submit
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.orders.loading,
    price: state.cart.totalPrice,
    orders: state.cart.cart,
    userId: state.auth.userId,
    token: state.auth.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPurchase: (orderData, token) => {
      return dispatch(actions.purchase(orderData, token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Form, axios));
