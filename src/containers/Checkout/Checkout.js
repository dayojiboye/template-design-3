import React, { Component, Fragment } from 'react';
import classes from './Checkout.module.css';
import { connect } from 'react-redux';

import Form from './CheckoutForm/Form';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Sidedrawer from '../../components/UI/Sidedrawer/Sidedrawer';
import Footer from '../../components/UI/Footer/Footer';

class Checkout extends Component {
  state = {
    isCartSlidebarOpen: false,
    isSidedrawerOpen: false,
  };

  body = document.body;

  backdropHandler = () => {
    this.setState({ isCartSlidebarOpen: false, isSidedrawerOpen: false });

    document.documentElement.classList.remove('fixed');
    this.body.classList.remove('fixed');
  };

  toggleCartSlidebar = () => {
    this.setState({ isCartSlidebarOpen: true });

    document.documentElement.classList.add('fixed');
    this.body.classList.add('fixed');
  };

  toggleSideDrawer = () => {
    if (this.state.isCartSlidebarOpen) {
      this.setState({ isCartSlidebarOpen: false, isSidedrawerOpen: false });
      document.documentElement.classList.toggle('fixed');
      this.body.classList.toggle('fixed');
      return;
    }

    this.setState((prevState) => {
      return {
        isSidedrawerOpen: !prevState.isSidedrawerOpen,
      };
    });

    document.documentElement.classList.toggle('fixed');
    this.body.classList.toggle('fixed');
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.onCheckoutStart();
  }

  componentDidUpdate() {
    if (this.props.purchased) {
      this.props.onClearCart();
    }
  }

  componentWillUnmount() {
    document.documentElement.classList.remove('fixed');
    this.body.classList.remove('fixed');
  }

  render() {
    if (this.props.purchased || !this.props.isUserAuth) {
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <Backdrop
          cartSlidebar={this.state.isCartSlidebarOpen}
          sideDrawer={this.state.isSidedrawerOpen}
          hide={this.backdropHandler}
        />
        <Toolbar
          cartSlidebar={this.state.isCartSlidebarOpen}
          toggleCartSlidebar={this.toggleCartSlidebar}
          showSideDrawer={this.toggleSideDrawer}
          isSideDrawer={this.state.isSidedrawerOpen}
          isAuthenticated={this.props.isUserAuth}
        />
        <Sidedrawer
          showSideDrawer={this.state.isSidedrawerOpen}
          cartSlidebar={this.state.isCartSlidebarOpen}
          isAuthenticated={this.props.isUserAuth}
        />
        <main className={classes.Checkout}>
          <header>
            <h1>Check out form</h1>
          </header>
          <Form />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    purchased: state.orders.purchased,
    isUserAuth: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClearCart: () => {
      return dispatch(actions.clear());
    },
    onCheckoutStart: () => {
      return dispatch(actions.checkoutStart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
