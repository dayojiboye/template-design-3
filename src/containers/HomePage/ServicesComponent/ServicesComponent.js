import React from 'react';
import classes from './ServicesComponent.module.css';
import SectionComponent from '../../../hoc/SectionComponent/Section';
import shoppingImg from '../../../assets/illustrations/undraw_online_groceries_a02y.png';
import deliveryImg from '../../../assets/illustrations/undraw_order_delivered_p6ba.png';
import hdImage from '../../../assets/images/vw-4120364_960_720.png';
import { Link } from 'react-router-dom';

const servicesComponent = (props) => {
  return (
    <SectionComponent class={classes.Services}>
      <div className={classes.ServicesShopping}>
        <div className={classes.ShoppingImg}>
          <img src={shoppingImg} alt="shopping img" />
        </div>
        <div className={classes.ShoppingContent}>
          <h2>Duis semper pretium lectus.</h2>
          <p>
            Nulla molestie finibus scelerisque. Curabitur commodo, ex sit amet
            accumsan fermentum, tellus ex pharetra dolor, ac eleifend sapien
            justo nec justo.
          </p>
          <a href="/">
            See ways to sell online{' '}
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
      </div>
      <div className={classes.ServicesDelivery}>
        <div className={classes.DeliveryContent}>
          <h2>Duis semper pretium lectus.</h2>
          <p>
            Nulla molestie finibus scelerisque. Curabitur commodo, ex sit amet
            accumsan fermentum, tellus ex pharetra dolor, ac eleifend sapien
            justo nec justo.
          </p>
          <a href="/">
            Find out how to get started{' '}
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
        <div className={classes.DeliveryImg}>
          <img src={deliveryImg} alt="delivery img" />
        </div>
      </div>
      <div className={classes.ServicesHardware}>
        <div className={classes.HardwareBg}>
          <img src={hdImage} alt="hd img" />
        </div>
        <div className={classes.HardwareContent}>
          <h2>Duis semper pretium lectus.</h2>
          <p>
            Nulla molestie finibus scelerisque. Curabitur commodo, ex sit amet
            accumsan fermentum, tellus ex pharetra dolor, ac eleifend sapien
            justo nec justo.
          </p>
          <div>
            <Link to="/shop">
              Shop affordable cars{' '}
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
          </div>
          <div>
            <a href="/">
              See all payment options available{' '}
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default servicesComponent;
