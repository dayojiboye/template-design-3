import React from 'react';
import classes from './ResourcesComponent.module.css';
import SectionComponent from '../../../hoc/SectionComponent/Section';
import CardComponent from '../../../hoc/CardComponent/Card';
import hdImage from '../../../assets/images/vintage-car-1209342_960_720.jpg';
import cardImg1 from '../../../assets/illustrations/undraw_address_udes.png';
import cardImg2 from '../../../assets/illustrations/undraw_Credit_card_3ed6.png';

const resourcesComponent = (props) => {
  let style = [classes.Card, classes.Right];

  return (
    <SectionComponent class={classes.Resources}>
      <div className={classes.ResourcesImg}>
        <img src={hdImage} alt="hd img" />
      </div>
      <div className={classes.ResourcesContent}>
        <h2>Aliquam blandit sem vel porttitor mattis.</h2>
        <p>
          Sed non laoreet nunc, eu tempus odio. Praesent scelerisque rutrum
          massa non pharetra.
        </p>
        <div className={classes.ResourcesCards}>
          <CardComponent class={style.join(' ')} link="/">
            <div className={classes.CardImg}>
              <img src={cardImg1} alt="card img 1" />
            </div>
            <div className={classes.CardContent}>
              <h3>Nulla molestie scelerisque.</h3>
              <p>In cursus auctor iaculis. In blandit scelerisque fringilla.</p>
              <p className={classes.CardLink}>
                Visit the delivery hub{' '}
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </p>
            </div>
          </CardComponent>
          <CardComponent class={classes.Card} link="/">
            <div className={classes.CardImg}>
              <img src={cardImg2} alt="card img 2" />
            </div>
            <div className={classes.CardContent}>
              <h3>Nulla molestie scelerisque.</h3>
              <p>In cursus auctor iaculis. In blandit scelerisque fringilla.</p>
              <p className={classes.CardLink}>
                Visit the directory{' '}
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </p>
            </div>
          </CardComponent>
        </div>
        <div className={classes.ResourcesLink}>
          <a href="/">
            Visit our full resource hub{' '}
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
      </div>
    </SectionComponent>
  );
};

export default resourcesComponent;
