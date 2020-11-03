import React from 'react';
import classes from './PaymentsIntro.module.css';

import { Link } from 'react-router-dom';

import SectionComponent from '../../../hoc/SectionComponent/Section';

const paymentsIntro = (props) => {
  return (
    <SectionComponent class={classes.Intro}>
      <div className={classes.Content}>
        <h4>Pellentesque efficitur</h4>
        <h1>Fusce feugiat libero ut felis tempor feugiat.</h1>
        <div className={classes.Start}>
          <Link to="/signup">Get started</Link>
        </div>
        <a href="/" className={classes.IntroLink}>
          For help getting started, connect with us{' '}
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </a>
      </div>
    </SectionComponent>
  );
};

export default paymentsIntro;
