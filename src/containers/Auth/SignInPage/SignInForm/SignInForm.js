import React, { Component, Fragment } from 'react';
import classes from './SignInForm.module.css';
import { connect } from 'react-redux';

import Input from '../../../../components/UI/Input/Input';
import { Link, Redirect } from 'react-router-dom';
import * as actions from '../../../../store/actions/index';

class Form extends Component {
  state = {
    loginForm: {
      email: {
        elType: 'input',
        config: {
          type: 'email',
          name: 'email',
          placeholder: 'Email Address',
        },
        rules: {
          required: true,
        },
        value: '',
        validity: true,
      },
      password: {
        elType: 'input',
        config: {
          type: 'password',
          name: 'password',
          placeholder: 'Password',
        },
        rules: {
          required: true,
          minLength: 6,
        },
        value: '',
        validity: true,
      },
    },
    formAnimation: false,
    isSignUp: false,
  };

  checkValidity = (rules, value) => {
    let invalidEl = true;

    if (rules.required) {
      invalidEl = value.trim() !== '' && invalidEl;
    }

    if (rules.minLength) {
      invalidEl = value.length >= 6 && invalidEl;
    }

    return invalidEl;
  };

  inputHandler = (id, event) => {
    const updatedLoginForm = { ...this.state.loginForm };
    const updatedFormElement = { ...updatedLoginForm[id] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.validity = this.checkValidity(
      updatedFormElement.rules,
      updatedFormElement.value
    );

    if (this.props.error) {
      this.props.onErrorDismiss();
    }

    updatedLoginForm[id] = updatedFormElement;
    this.setState({ loginForm: updatedLoginForm });
  };

  formHandler = (event) => {
    event.preventDefault();

    this.props.onAuth(
      this.state.loginForm.email.value,
      this.state.loginForm.password.value,
      this.state.isSignUp
    );
  };

  formAnimationHandler = () => {
    let updatedLoginForm = { ...this.state.loginForm };

    for (let key in updatedLoginForm) {
      let updatedFormElement = { ...updatedLoginForm[key] };
      if (updatedFormElement.value === '' && !this.state.formAnimation) {
        updatedFormElement.validity = false;
        updatedLoginForm[key] = updatedFormElement;
        this.setState({ loginForm: updatedLoginForm, formAnimation: true });
      }
    }
  };

  componentDidUpdate() {
    if (this.state.formAnimation) {
      setTimeout(() => {
        this.setState({ formAnimation: false });
      }, 1000);
    }
  }

  render() {
    let inputEl = [];
    let formStyle = [classes.Form];
    let loginErrorMessage = null;

    let btnText = this.props.loading ? (
      <i class="fas fa-spinner fa-lg fa-spin"></i>
    ) : (
      'Sign In'
    );

    loginErrorMessage =
      this.props.error && this.props.error === 'INVALID_PASSWORD'
        ? 'PASSWORD IS NOT CORRECT!'
        : this.props.error && this.props.error === 'EMAIL_NOT_FOUND'
        ? 'EMAIL DOES NOT EXIST!'
        : !this.props.error
        ? null
        : 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.';

    if (this.state.formAnimation) {
      formStyle.push(classes.Invalid);
    }

    for (let key in this.state.loginForm) {
      inputEl.push({ id: key, config: this.state.loginForm[key] });
    }

    let authRedirect = null;
    if (this.props.isUserAuth) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <Fragment>
        {authRedirect}
        <form className={formStyle.join(' ')} onSubmit={this.formHandler}>
          <div className={classes.Logo}>
            <span>BrandLogo</span>
          </div>
          <div className={classes.InputGroup}>
            {inputEl.map((input) => {
              return (
                <Input
                  key={input.id}
                  noLabel
                  inputClass={classes.Input}
                  elType={input.config.elType}
                  elConfig={input.config.config}
                  value={input.config.value}
                  changed={this.inputHandler.bind(this, input.id)}
                  required={input.config.rules.required}
                  validity={input.config.validity}
                  invalid={classes.Invalid}
                  loginError={this.props.error}
                />
              );
            })}
          </div>
          <span className={classes.ErrorMessage}>{loginErrorMessage}</span>
          <a href="/" className={classes.ForgotPass}>
            Forgot Password?
          </a>
          <button
            className={classes.SubmitBtn}
            onClick={this.formAnimationHandler}
          >
            {btnText}
          </button>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
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
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) => {
      return dispatch(actions.auth(email, password, isSignUp));
    },
    onErrorDismiss: () => {
      return dispatch(actions.authErrorDismiss());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
