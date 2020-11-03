import React, { Component, Fragment } from 'react';
import classes from './SignUp.module.css';

import Top from './SignUpTop/Top';
import Form from './SignUpForm/Form';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Fragment>
        <header className={classes.Header}>
          <div className={classes.BrandLogo}>
            <Link to="/">BrandLogo</Link>
          </div>
        </header>
        <main className={classes.Main}>
          <Top />
          <Form />
        </main>
      </Fragment>
    );
  }
}

export default SignUp;
