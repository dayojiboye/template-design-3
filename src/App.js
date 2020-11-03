import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import HomePage from './containers/HomePage/HomePage';
import Shop from './containers/ShopCars/Shop';
import Cart from './containers/Cart/Cart';
import Logout from './containers/Auth/Logout/Logout';

const PaymentsPage = lazy(() => {
  return import('./containers/PaymentsPage/PaymentsPage');
});

const SignUpPage = lazy(() => {
  return import('./containers/Auth/SignUpPage/SignUp');
});

const SignInPage = lazy(() => {
  return import('./containers/Auth/SignInPage/SignIn');
});

const Checkout = lazy(() => {
  return import('./containers/Checkout/Checkout');
});

const Orders = lazy(() => {
  return import('./containers/Orders/Orders');
});

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  componentDidUpdate(prevProps) {
    if (this.props.cart !== prevProps.cart) {
      localStorage.setItem('cart', JSON.stringify(this.props.cart));
      localStorage.setItem('total', this.props.totalPrice);
    }
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/payments" component={PaymentsPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/payments" component={PaymentsPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Suspense
          fallback={<LoadingBar height={3} color="#1b88c2" progress={98} />}
        >
          {routes}
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignUp: () => {
      return dispatch(actions.authCheckState());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
