import React, { Component, Fragment } from 'react';

import classes from './HomePage.module.css';
import { connect } from 'react-redux';

import Footer from '../../components/UI/Footer/Footer';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Sidedrawer from '../../components/UI/Sidedrawer/Sidedrawer';
import FixedBar from '../../components/UI/FixedBar/Fixedbar';

import IntroComponent from './Intro/Intro';
import ServicesComponent from './ServicesComponent/ServicesComponent';
import ResourcesComponent from './ResourcesComponent/Resources';
import ToolsComponent from './ToolsComponent/ToolsComponent';
import HardwareComponent from './HardwareComponent/HardwareComponent';
import GetStartedComponent from './GetStartedComponent/GetStarted';
import SupportComponent from './SupportComponent/SupportComponent';
import CompanyInfo from './CompanyInfoComponent/CompanyInfo';

class HomePage extends Component {
  state = {
    isCartSlidebarOpen: false,
    isSidedrawerOpen: false,
    isStartbarOpen: false,
  };

  body = document.body;

  backdropHandler = () => {
    this.setState({ isCartSlidebarOpen: false, isSidedrawerOpen: false });

    document.documentElement.classList.remove('fixed');
    this.body.classList.remove('fixed');
  };

  startBarHandler = () => {
    if (
      document.documentElement.scrollTop < 8103 &&
      document.documentElement.scrollTop > 237
    ) {
      this.setState({ isStartbarOpen: true });
    } else {
      this.setState({ isStartbarOpen: false });
    }
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
    window.addEventListener('scroll', this.startBarHandler);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    document.documentElement.classList.remove('fixed');
    this.body.classList.remove('fixed');

    window.removeEventListener('scroll', this.startBarHandler);
  }

  render() {
    let style = [classes.Fixedbar];

    if (this.state.isStartbarOpen) {
      style.push(classes.Show);
    }

    return (
      <Fragment>
        <Backdrop
          cartSlidebar={this.state.isCartSlidebarOpen}
          sideDrawer={this.state.isSidedrawerOpen}
          hide={this.backdropHandler}
        />
        <FixedBar
          class={style.join(' ')}
          startBtn={classes.StartBtn}
          btnContent="Get started"
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
        <main className={classes.Main}>
          <IntroComponent />
          <ServicesComponent />
          <ResourcesComponent />
          <ToolsComponent />
          <HardwareComponent />
          <GetStartedComponent />
          <SupportComponent />
          <CompanyInfo />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(HomePage);
