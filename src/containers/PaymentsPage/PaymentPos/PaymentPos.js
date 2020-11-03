import React from 'react';
import classes from './PaymentPos.module.css';

import SectionComponent from '../../../hoc/SectionComponent/Section';
import posImage from '../../../assets/images/autostadt-wolfsburg-1104081_960_720.jpg';

const paymentPos = (props) => {
  return (
    <SectionComponent class={classes.PaymentPos}>
      <div className={classes.PosImage}>
        <img src={posImage} alt="pos img" />
      </div>
      <div className={classes.PosContent}>
        <h2>Aenean vestibulum at ipsum non tincidunt</h2>
        <p>
          Aliquam pulvinar velit massa, eget consectetur dolor laoreet suscipit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <ul>
          <li>
            <p>
              <ion-icon name="checkmark-outline"></ion-icon> Nam lacinia ex ac
              felis dignissim
            </p>
          </li>
          <li>
            <p>
              <ion-icon name="checkmark-outline"></ion-icon> Nam lacinia ex ac
              felis dignissim
            </p>
          </li>
          <li>
            <p>
              <ion-icon name="checkmark-outline"></ion-icon> Nam lacinia ex ac
              felis dignissim
            </p>
          </li>
        </ul>
        <a href="/">
          Learn more about Point of Sale{' '}
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </a>
      </div>
    </SectionComponent>
  );
};

export default paymentPos;
