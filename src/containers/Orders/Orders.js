import React, { Component, Fragment } from 'react';
import classes from './Orders.module.css';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import OrdersList from './OrdersList/OrdersList';
import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// import axios from '../../components/axios/axios';

import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Sidedrawer from '../../components/UI/Sidedrawer/Sidedrawer';
import Footer from '../../components/UI/Footer/Footer';

class Orders extends Component {
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
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  componentWillUnmount() {
    document.documentElement.classList.remove('fixed');
    this.body.classList.remove('fixed');
  }

  render() {
    let orders = <OrdersList orders={this.props.orders} />;
    if (
      this.props.loading &&
      this.props.orders.length === 0 &&
      this.props.isUserAuth
    ) {
      orders = <Spinner />;
    } else if (!this.props.isUserAuth || this.props.orders.length === 0) {
      orders = (
        <h2 className={classes.UnAuthOrderText}>You Have No Order History</h2>
      );
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
        <main className={classes.Orders}>
          <header>
            <h1>Order History</h1>
          </header>
          {orders}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading,
    isUserAuth: state.auth.token !== null,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) => {
      return dispatch(actions.fetchOrders(token, userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
// import withErrorHandler
