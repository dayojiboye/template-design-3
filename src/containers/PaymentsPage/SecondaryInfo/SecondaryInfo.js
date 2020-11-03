import React from 'react';
import classes from './SecondaryInfo.module.css';

import SectionComponent from '../../../hoc/SectionComponent/Section';
import secondaryImg from '../../../assets/images/vw-beetle-994382_960_720.jpg';

const secondaryInfo = (props) => {
  return (
    <SectionComponent class={classes.SecondaryInfo}>
      <div className={classes.SecondaryImage}>
        <img src={secondaryImg} alt="section img" />
      </div>
      <div className={classes.InfoHeader}>
        <h2>Pellentesque efficitur pulvinar</h2>
        <p>
          Donec a fermentum tellus, ac blandit quam. Ut at nulla vitae metus
          aliquam fermentum ac nec mauris. In hac habitasse platea dictumst.
        </p>
      </div>
      <div className={classes.Grid}>
        <div className={classes.Column}>
          <h3>Lorem ipsum</h3>
          <ul>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Etiam accumsan orci convallis
                metus dictum, at lobortis velit tincidunt.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Etiam accumsan orci convallis
                metus dictum, at lobortis velit tincidunt.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Etiam accumsan orci convallis
                metus dictum, at lobortis velit tincidunt.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Etiam accumsan orci convallis
                metus dictum, at lobortis velit tincidunt.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Etiam accumsan orci convallis
                metus dictum, at lobortis velit tincidunt.
              </p>
            </li>
          </ul>
        </div>
        <div className={classes.Column}>
          <h3>Lorem ipsum</h3>
          <ul>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Etiam accumsan orci convallis
                metus dictum, at lobortis velit tincidunt.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Etiam accumsan orci convallis
                metus dictum, at lobortis velit tincidunt.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Etiam accumsan orci convallis
                metus dictum, at lobortis velit tincidunt.
              </p>
            </li>
          </ul>
        </div>
        <div className={classes.Column}>
          <h3>Lorem ipsum</h3>
          <ul>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Etiam accumsan orci convallis
                metus dictum, at lobortis velit tincidunt.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Etiam accumsan orci convallis
                metus dictum, at lobortis velit tincidunt.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Etiam accumsan orci convallis
                metus dictum, at lobortis velit tincidunt.
              </p>
            </li>
            <li>
              <p>
                <ion-icon name="checkmark-outline"></ion-icon> Etiam accumsan orci convallis
                metus dictum, at lobortis velit tincidunt.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SectionComponent>
  );
};

export default secondaryInfo;
