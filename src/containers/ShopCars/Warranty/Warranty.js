import React from 'react';
import classes from './Warranty.module.css';

import SectionComponent from '../../../hoc/SectionComponent/Section';
import CardComponent from '../../../hoc/CardComponent/Card';

const warranty = (props) => {
  return (
    <SectionComponent class={classes.Warranty}>
      <CardComponent normal class={classes.WarrantyGrid}>
        <CardComponent class={classes.CardOne} link="/">
          <div className={classes.WarrantyIcon}>
            <ion-icon name="ribbon-outline"></ion-icon>
          </div>
          <div className={classes.WarrantyDetails}>
            <h4>Quisque fermentum nunc elementum tempor</h4>
            <p>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
            <span>
              Return a{' '}
              <span className={classes.Word}>
                car <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </span>
          </div>
        </CardComponent>
        <CardComponent class={classes.CardTwo} link="/">
          <div className={classes.WarrantyIcon}>
            <ion-icon name="car-sport-outline"></ion-icon>
          </div>
          <div className={classes.WarrantyDetails}>
            <h4>Quisque fermentum nunc elementum tempor</h4>
            <p>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
            <span>
              View warranty{' '}
              <span className={classes.Word}>
                terms <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </span>
          </div>
        </CardComponent>
      </CardComponent>
    </SectionComponent>
  );
};

export default warranty;
