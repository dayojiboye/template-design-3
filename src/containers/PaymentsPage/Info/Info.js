import React from 'react';
import classes from './Info.module.css';

import SectionComponent from '../../../hoc/SectionComponent/Section';
import img1 from '../../../assets/illustrations/undraw_fast_car_p4cu.png';
import img2 from '../../../assets/illustrations/undraw_electric_car_b7hl.png';
import img3 from '../../../assets/illustrations/undraw_Vehicle_sale_a645.png';
import img4 from '../../../assets/illustrations/undraw_by_my_car_ttge.png';
import infoImg from '../../../assets/images/vw-5281796_960_720.jpg';

const info = (props) => {
  return (
    <SectionComponent class={classes.Info}>
      <hr className={classes.InfoBorder} />
      <div className={classes.Row}>
        <div className={classes.GridImage}>
          <img src={img1} alt="info img" />
        </div>
        <div className={classes.GridContent}>
          <h2>Donec et orci molestie</h2>
          <ul>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Curabitur blandit
                dapibus erat, a posuere odio pulvinar in. Integer mattis
                bibendum congue.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Curabitur blandit
                dapibus erat, a posuere odio pulvinar in. Integer mattis
                bibendum congue.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Curabitur blandit
                dapibus erat, a posuere odio pulvinar in. Integer mattis
                bibendum congue.
              </p>
            </li>
          </ul>
          <a href="/">
            Find the right option for you{' '}
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
      </div>
      <div className={classes.Row}>
        <div className={classes.GridContent}>
          <h2>Donec et orci molestie</h2>
          <ul>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Curabitur blandit
                dapibus erat, a posuere odio pulvinar in. Integer mattis
                bibendum congue.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Curabitur blandit
                dapibus erat, a posuere odio pulvinar in. Integer mattis
                bibendum congue.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Curabitur blandit
                dapibus erat, a posuere odio pulvinar in. Integer mattis
                bibendum congue.
              </p>
            </li>
          </ul>
          <a href="/">
            See all time and money details{' '}
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
        <div className={classes.GridImage}>
          <img src={img2} alt="info img" />
        </div>
      </div>
      <div className={classes.InfoImage}>
        <img src={infoImg} alt="info main img" />
      </div>
      <div className={classes.Row}>
        <div className={classes.GridImage}>
          <img src={img3} alt="info img" />
        </div>
        <div className={classes.GridContent}>
          <h2>Donec et orci molestie</h2>
          <ul>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Curabitur blandit
                dapibus erat, a posuere odio pulvinar in. Integer mattis
                bibendum congue.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Curabitur blandit
                dapibus erat, a posuere odio pulvinar in. Integer mattis
                bibendum congue.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Curabitur blandit
                dapibus erat, a posuere odio pulvinar in. Integer mattis
                bibendum congue.
              </p>
            </li>
          </ul>
          <a href="/">
            See all security details{' '}
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
      </div>
      <div className={classes.Row}>
        <div className={classes.GridContent}>
          <h2>Donec et orci molestie</h2>
          <ul>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Curabitur blandit
                dapibus erat, a posuere odio pulvinar in. Integer mattis
                bibendum congue.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Curabitur blandit
                dapibus erat, a posuere odio pulvinar in. Integer mattis
                bibendum congue.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Curabitur blandit
                dapibus erat, a posuere odio pulvinar in. Integer mattis
                bibendum congue.
              </p>
            </li>
          </ul>
        </div>
        <div className={classes.GridImage}>
          <img src={img4} alt="info img" />
        </div>
      </div>
      <hr className={classes.InfoBorder} />
    </SectionComponent>
  );
};

export default info;
