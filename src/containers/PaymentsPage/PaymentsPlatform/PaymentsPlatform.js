import React from 'react';
import classes from './PaymentsPlatform.module.css';

import SectionComponent from '../../../hoc/SectionComponent/Section';
import platformImg from '../../../assets/images/vw-beetle-667460_960_720.jpg';

const paymentsPlatform = (props) => {
  return (
    <SectionComponent class={classes.Platform}>
      <div className={classes.PlatformContent}>
        <h3>Proin mollis en Egestas.</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus</p>
        <a href="/">
          Learn more about the payment{' '}
          <span className={classes.Word}>
            platform <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </a>
      </div>
      <div className={classes.PlatformImage}>
        <img src={platformImg} alt="platform img" />
      </div>
    </SectionComponent>
  );
};

export default paymentsPlatform;
