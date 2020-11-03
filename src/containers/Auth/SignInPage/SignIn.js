import React, { Component } from 'react';
import classes from './SignIn.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import Form from './SignInForm/SignInForm';

class SignIn extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#fafafa';

    if (
      this.props.cart.length > 0 &&
      this.props.authRedirectPath === '/signin' &&
      this.props.checkoutInit
    ) {
      this.props.onSetAuthRedirectPath('/checkout');
    } else if (
      this.props.cart.length > 0 &&
      this.props.authRedirectPath === '/checkout'
    ) {
      this.props.onSetAuthRedirectPath('/');
    } else if (this.props.authRedirectPath === '/shop') {
      this.props.onSetAuthRedirectPath('/');
    } else if (this.props.cart.length === 0 || !this.props.checkoutInit) {
      this.props.onSetAuthRedirectPath('/');
    }
  }

  componentWillUnmount() {
    this.props.onDismissAlert();
    this.props.onSetAuthRedirectPath('/');

    document.body.style.backgroundColor = '';
  }

  render() {
    return (
      <main className={classes.SignIn}>
        <Form />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    authRedirectPath: state.auth.authRedirectPath,
    checkoutInit: state.cart.checkout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDismissAlert: () => {
      return dispatch(actions.authErrorDismiss());
    },
    onSetAuthRedirectPath: (path) => {
      return dispatch(actions.setAuthRedirectPath(path));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
