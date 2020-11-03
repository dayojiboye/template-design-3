import React, { Component, Fragment } from 'react';
import classes from './Cart.module.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Table from './CartTable/CartTable';
import * as actions from '../../store/actions/index';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Sidedrawer from '../../components/UI/Sidedrawer/Sidedrawer';
import Footer from '../../components/UI/Footer/Footer';

class Cart extends Component {
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

    this.props.onPurchaseInit();

    if (this.props.cart.length > 0 && !this.props.isAuth) {
      this.props.onSetAuthRedirectPath('/signin');
    } else if (
      this.props.cart.length === 0 &&
      this.props.authRedirectPath === '/'
    ) {
      this.props.onSetAuthRedirectPath('/shop');
    }
  }

  componentDidUpdate() {
    if (this.props.cart.length > 0 && this.props.isAuth) {
      this.props.onSetAuthRedirectPath('/checkout');
    } else if (this.props.cart.length === 0) {
      this.props.onSetAuthRedirectPath('/shop');
    }
  }

  componentWillUnmount() {
    document.documentElement.classList.remove('fixed');
    this.body.classList.remove('fixed');
  }

  render() {
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
          isAuthenticated={this.props.isAuth}
        />
        <Sidedrawer
          showSideDrawer={this.state.isSidedrawerOpen}
          cartSlidebar={this.state.isCartSlidebarOpen}
          isAuthenticated={this.props.isAuth}
        />
        <main className={classes.Cart}>
          <header>
            <h1>Cart</h1>
          </header>
          <Table
            cart={this.props.cart}
            clicked={(id, price) => {
              return this.props.onRemoveFromCart(id, price);
            }}
          />
          <div className={classes.TotalPrice}>
            <h3>Total Price:</h3>
            <p>
              $
              {this.props.totalPrice
                .toFixed(0)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </p>
            <Link
              to={this.props.authRedirectPath}
              onClick={this.props.onCheckoutInit}
            >
              Checkout
            </Link>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
    isAuth: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromCart: (id, price) => {
      return dispatch(actions.removeFromCart(id, price));
    },
    onPurchaseInit: () => {
      return dispatch(actions.purchaseInit());
    },
    onSetAuthRedirectPath: (path) => {
      return dispatch(actions.setAuthRedirectPath(path));
    },
    onCheckoutInit: () => {
      return dispatch(actions.checkoutInit());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
