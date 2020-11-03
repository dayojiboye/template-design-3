import React, { Component, Fragment } from 'react';
import classes from './Shop.module.css';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../components/axios/axios';
import Cars from './Cars/Cars';
import Warranty from './Warranty/Warranty';

import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Sidedrawer from '../../components/UI/Sidedrawer/Sidedrawer';
import Footer from '../../components/UI/Footer/Footer';

class Shop extends Component {
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

    this.props.onFetchCars();
  }

  componentWillUnmount() {
    document.documentElement.classList.remove('fixed');
    this.body.classList.remove('fixed');
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
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
          isAuthenticated={this.props.isAuth}
        />
        <Sidedrawer
          showSideDrawer={this.state.isSidedrawerOpen}
          cartSlidebar={this.state.isCartSlidebarOpen}
          isAuthenticated={this.props.isAuth}
        />
        <main className={classes.Shop}>
          <Cars
            cars={this.props.cars}
            clicked={(name, image, price) => {
              return this.props.onAddToCart(name, image, price);
            }}
          />
          <Warranty />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.cars.loading,
    cars: state.cars.cars,
    isAuth: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCars: () => {
      return dispatch(actions.fetchCars());
    },
    onAddToCart: (name, image, price) => {
      return dispatch(actions.addToCart(name, image, price));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Shop, axios));
