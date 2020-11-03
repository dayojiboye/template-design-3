import React, { Component, Fragment } from 'react';
import classes from './Form.module.css';
import { connect } from 'react-redux';

import Input from '../../../../components/UI/Input/Input';
// import axios from '../../../../components/axios-users/axios-users';
// import withErrorHandler from '../../../../hoc/withErrorHandler/withErrorHandler';
import SignInLink from '../../../../components/UI/SignInLink/SignInLink';
import * as actions from '../../../../store/actions/index';
import Alert from '../../../../components/UI/Alert/Alert';
import { Redirect } from 'react-router-dom';

class Form extends Component {
  state = {
    regForm: {
      email: {
        label: 'Enter your email',
        elType: 'input',
        config: {
          type: 'email',
          name: 'email',
          id: 'email',
          placeholder: 'you@example.com',
        },
        rules: {
          required: true,
          emptyTextError:
            'Enter the email address you want to use to create your new account!',
          pattern: /^\S+@\S+\.\S+$/i,
          patternErrText:
            'The email address you entered does not appear to be valid!',
        },
        value: '',
        validity: true,
      },
      confirmEmail: {
        label: 'Confirm your email',
        elType: 'input',
        config: {
          type: 'email',
          name: 'email',
          id: 'email-confirmation',
          placeholder: 'you@example.com',
        },
        rules: {
          required: true,
          emptyTextError:
            "Enter your email address twice to confirm it's correct!",
          patternErrText: 'The email addresses you entered do not match!',
        },
        value: '',
        validity: true,
      },
      password: {
        label: 'Create a password',
        elType: 'input',
        config: {
          type: 'password',
          name: 'password',
          id: 'password',
          placeholder: 'Password',
        },
        rules: {
          required: true,
          emptyTextError:
            'Create a password so you can login to your new account!',
          minLength: 6,
          patternErrText: 'Password must be at least 6 characters long',
        },
        value: '',
        validity: true,
      },
      country: {
        label: 'Country',
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
          emptyTextError: 'Please select a country!',
        },
        value: '',
        validity: true,
      },
    },
    checkboxValidity: true,
    formValidity: false,
    isSignUp: true,
  };

  checkValidity = (rules, value, id) => {
    let invalidEl = true;

    if (rules.required) {
      invalidEl = value.trim() !== '' && invalidEl;
    }

    if (rules.pattern) {
      invalidEl = rules.pattern.test(value) && invalidEl;
    }

    if (rules.minLength) {
      invalidEl = value.length >= 6 && invalidEl;
    }

    if (id === 'confirmEmail') {
      invalidEl = value === this.state.regForm.email.value && invalidEl;
    }

    return invalidEl;
  };

  inputHandler = (id, event) => {
    const updatedRegForm = { ...this.state.regForm };
    const updatedFormElement = { ...updatedRegForm[id] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.validity = this.checkValidity(
      updatedFormElement.rules,
      updatedFormElement.value,
      id
    );
    updatedRegForm[id] = updatedFormElement;

    if (id === 'email') {
      if (
        updatedRegForm.confirmEmail.value !== updatedFormElement.value &&
        updatedRegForm.confirmEmail.value.trim() !== ''
      ) {
        updatedRegForm.confirmEmail.validity = false;
      } else if (
        updatedRegForm.confirmEmail.value === '' &&
        updatedRegForm.confirmEmail.validity === false
      ) {
        updatedRegForm.confirmEmail.validity = false;
      } else {
        updatedRegForm.confirmEmail.validity = true;
      }
    }

    let formValidity = true;
    for (let keys in updatedRegForm) {
      formValidity =
        updatedRegForm[keys].validity &&
        updatedRegForm[keys].value.trim() !== '' &&
        formValidity &&
        document.getElementById('user-agreement').checked;
    }

    this.setState({ regForm: updatedRegForm, formValidity: formValidity });
  };

  checkboxHandler = (event) => {
    if (!event.target.checked) {
      this.setState({ checkboxValidity: false, formValidity: false });
    } else {
      this.setState({ checkboxValidity: true });
    }

    let formValidity = true;

    const regForm = { ...this.state.regForm };
    for (let keys in regForm) {
      formValidity =
        regForm[keys].value.trim() !== '' &&
        regForm[keys].validity &&
        event.target.checked &&
        formValidity;
    }

    this.setState({ formValidity: formValidity });
  };

  formHandler = (event) => {
    event.preventDefault();

    this.props.onAuth(
      this.state.regForm.email.value,
      this.state.regForm.password.value,
      this.state.isSignUp
    );
  };

  componentDidUpdate() {
    if (this.props.error) {
      setTimeout(() => {
        this.props.onDismissAlert();
      }, 3000);
    }
  }

  render() {
    let formInput = [];
    let checkboxStyle = [classes.Checkbox];
    let btnText = 'CONTINUE';

    if (this.props.loading) {
      btnText = <i class="fas fa-spinner fa-lg fa-spin"></i>;
    }

    for (let keys in this.state.regForm) {
      formInput.push({ id: keys, config: this.state.regForm[keys] });
    }

    if (!this.state.checkboxValidity) {
      checkboxStyle.push(classes.Invalid);
    }

    let authRedirect = null;
    if (this.props.isUserAuth) {
      authRedirect = <Redirect to="/" />;
    }

    return (
      <Fragment>
        {authRedirect}
        <Alert show={this.props.error} clicked={this.props.onDismissAlert}>
          EMAIL EXISTS
        </Alert>
        <form className={classes.Form} onSubmit={this.formHandler}>
          <hr className={classes.BorderTop} />
          <div className={classes.FormGrid}>
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
          <hr className={classes.BorderTop} />
          <div className={classes.FormCheckGroup}>
            <input
              className={checkboxStyle.join(' ')}
              type="checkbox"
              id="user-agreement"
              onClick={this.checkboxHandler}
              required
            />
            <label htmlFor="user-agreement" className={classes.CheckLabel}>
              I agree to Brand's <a href="/">Terms</a> and{' '}
              <a href="/">Privacy Policy</a>.
            </label>
          </div>
          <hr className={classes.BorderTop} />
          <div className={classes.FormFooter}>
            <p>
              Already have an account? <SignInLink />
            </p>
            <button
              className={classes.SubmitButton}
              disabled={!this.state.formValidity}
            >
              {btnText}
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    isUserAuth: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) => {
      return dispatch(actions.auth(email, password, isSignUp));
    },
    onDismissAlert: () => {
      return dispatch(actions.authErrorDismiss());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
