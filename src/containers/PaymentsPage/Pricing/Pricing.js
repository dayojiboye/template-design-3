import React from 'react';
import classes from './Pricing.module.css';

import SectionComponent from '../../../hoc/SectionComponent/Section';
import CardComponent from '../../../hoc/CardComponent/Card';

const pricing = (props) => {
  return (
    <SectionComponent class={classes.Pricing}>
      <div className={classes.PricingHeader}>
        <i className="fas fa-coins fa-5x" style={{ color: '#5174d1' }}></i>
        <h2>Cras tempus vitae urna commodo varius.</h2>
      </div>
      <div className={classes.GridOne}>
        <div className={classes.Box1}>
          <div className={classes.Content}>
            <h3>Duis efficitur</h3>
            <p>
              Suspendisse potenti. Nullam urna arcu, feugiat quis nunc vel,
              pulvinar dictum felis.
            </p>
          </div>
          <div className={classes.Content}>
            <h3>Duis efficitur</h3>
            <p>
              Suspendisse potenti. Nullam urna arcu, feugiat quis nunc vel,
              pulvinar dictum felis.
            </p>
          </div>
        </div>
        <div className={classes.Box2}>
          <div className={classes.Content}>
            <h3>Duis efficitur</h3>
            <p>
              Suspendisse potenti. Nullam urna arcu, feugiat quis nunc vel,
              pulvinar dictum felis.
            </p>
          </div>
          <div className={classes.Content}>
            <h3>Duis efficitur</h3>
            <p>
              Suspendisse potenti. Nullam urna arcu, feugiat quis nunc vel,
              pulvinar dictum felis.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.PricingLinks}>
        <a href="/">
          Learn more about{' '}
          <span className={classes.Word}>
            pricing <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </a>
        <a href="/">
          Learn more about processing{' '}
          <span className={classes.Word}>
            fees <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </a>
      </div>
      <div className={classes.GridTwo}>
        <CardComponent class={classes.Cardbox1} link="/">
          <div className={classes.CardContent}>
            <h3>Bibendum ultricies nulla</h3>
            <p>
              Vestibulum dictum est sed feugiat vestibulum. In orci enim,
              condimentum eu imperdiet sit amet, fermentum a eros. Fusce et nisl
              at nibh tempor efficitur. Donec volutpat, est et maximus varius,
              mi justo cursus mauris, a eleifend mi lorem in tortor.
            </p>
            <p className={classes.CardLink}>
              Contact sales now{' '}
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </p>
          </div>
        </CardComponent>
        <CardComponent class={classes.Cardbox2} link="/">
          <div className={classes.CardContent}>
            <h3>Bibendum ultricies nulla</h3>
            <p>
              Vestibulum dictum est sed feugiat vestibulum. In orci enim,
              condimentum eu imperdiet sit amet, fermentum a eros. Fusce et nisl
              at nibh tempor efficitur. Donec volutpat, est et maximus varius,
              mi justo cursus mauris, a eleifend mi lorem in tortor.
            </p>
            <p className={classes.CardLink}>
              Visit our support center{' '}
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </p>
          </div>
        </CardComponent>
      </div>
    </SectionComponent>
  );
};

export default pricing;
