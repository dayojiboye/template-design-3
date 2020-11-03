import React from 'react';
import classes from './Options.module.css';

import SectionComponent from '../../../hoc/SectionComponent/Section';
import CardComponent from '../../../hoc/CardComponent/Card';
import cardImg from '../../../assets/icons/gift-card.svg';

const options = (props) => {
  return (
    <SectionComponent class={classes.Options}>
      <div className={classes.OptionsHeader}>
        <h2>Cras tristique dictum pellentesque.</h2>
        <p>
          Cras ante tortor, faucibus at accumsan nec, laoreet a est. Etiam sed
          erat ac nisi tempor cursus nec eu massa.{' '}
          <a href="/">
            Learn about our payment rates{' '}
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </p>
      </div>
      <div className={classes.OptionsGrid}>
        <CardComponent class={classes.OptionsCard} normal>
          <div className={classes.CardImg}>
            <img src={cardImg} alt="card img" />
          </div>
          <div className={classes.CardContent}>
            <h3>Lorem Ipsum</h3>
            <p>
              Donec volutpat est et maximus varius mi justo cursus mauris a
              lorem in tortor.
            </p>
          </div>
          <div className={classes.CardLink}>
            <a href="/">
              Proin mollis accumsan{' '}
              <span className={classes.Word}>
                egestas <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </a>
          </div>
        </CardComponent>
        <CardComponent class={classes.OptionsCard} normal>
          <div className={classes.CardImg}>
            <img src={cardImg} alt="card img" />
          </div>
          <div className={classes.CardContent}>
            <h3>Lorem Ipsum</h3>
            <p>
              Donec volutpat est et maximus varius mi justo cursus mauris a
              lorem in tortor.
            </p>
          </div>
          <div className={classes.CardLink}>
            <a href="/">
              Proin mollis accumsan{' '}
              <span className={classes.Word}>
                egestas <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </a>
          </div>
        </CardComponent>
        <CardComponent class={classes.OptionsCard} normal>
          <div className={classes.CardImg}>
            <img src={cardImg} alt="card img" />
          </div>
          <div className={classes.CardContent}>
            <h3>Lorem Ipsum</h3>
            <p>
              Donec volutpat est et maximus varius mi justo cursus mauris a
              lorem in tortor.
            </p>
          </div>
          <div className={classes.CardLink}>
            <a href="/">
              Proin mollis accumsan{' '}
              <span className={classes.Word}>
                egestas <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </a>
          </div>
        </CardComponent>
        <CardComponent class={classes.OptionsCard} normal>
          <div className={classes.CardImg}>
            <img src={cardImg} alt="card img" />
          </div>
          <div className={classes.CardContent}>
            <h3>Lorem Ipsum</h3>
            <p>
              Donec volutpat est et maximus varius mi justo cursus mauris a
              lorem in tortor.
            </p>
          </div>
          <div className={classes.CardLink}>
            <a href="/">
              Proin mollis accumsan{' '}
              <span className={classes.Word}>
                egestas <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </a>
          </div>
        </CardComponent>
        <CardComponent class={classes.OptionsCard} normal>
          <div className={classes.CardImg}>
            <img src={cardImg} alt="card img" />
          </div>
          <div className={classes.CardContent}>
            <h3>Lorem Ipsum</h3>
            <p>
              Donec volutpat est et maximus varius mi justo cursus mauris a
              lorem in tortor.
            </p>
          </div>
          <div className={classes.CardLink}>
            <a href="/">
              Proin mollis accumsan{' '}
              <span className={classes.Word}>
                egestas <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </a>
          </div>
        </CardComponent>
        <CardComponent class={classes.OptionsCard} normal>
          <div className={classes.CardImg}>
            <img src={cardImg} alt="card img" />
          </div>
          <div className={classes.CardContent}>
            <h3>Lorem Ipsum</h3>
            <p>
              Donec volutpat est et maximus varius mi justo cursus mauris a
              lorem in tortor.
            </p>
          </div>
          <div className={classes.CardLink}>
            <a href="/">
              Proin mollis accumsan{' '}
              <span className={classes.Word}>
                egestas <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </a>
          </div>
        </CardComponent>
      </div>
      <hr className={classes.GridBorder} />
    </SectionComponent>
  );
};

export default options;
