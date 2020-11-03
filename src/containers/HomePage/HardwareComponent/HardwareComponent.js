import React from 'react';
import classes from './HardwareComponent.module.css';
import SectionComponent from '../../../hoc/SectionComponent/Section';
import EmblaCarousel from '../../../components/Embla/EmblaCarousel';
import hardwareImg from '../../../assets/images/vw-4269317_960_720.jpg';
import cardImg from '../../../assets/icons/atm.svg';
import CardComponent from '../../../hoc/CardComponent/Card';

const hardwareComponent = (props) => {
  return (
    <SectionComponent class={classes.Hardware}>
      <div className={classes.HardwareImg}>
        <img src={hardwareImg} alt="hardware img" />
      </div>
      <div className={classes.HardwareContent}>
        <h2>In eros felis porttitor ultricies.</h2>
        <p>
          Integer tincidunt mollis viverra. Mauris ut porttitor turpis. Integer
          tincidunt mollis viverra. Mauris ut porttitor turpis.
        </p>
        <a href="/" className={classes.HardwareLink}>
          Shop now with 20% off cars{' '}
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </a>
      </div>
      <EmblaCarousel>
        <CardComponent link="/" class={classes.Card}>
          <div className={classes.CardImg}>
            <img src={cardImg} alt="card img" />
          </div>
          <div className={classes.CardContent}>
            <h3>Donec quis justo a felis tempus</h3>
            <p>
              Sed non laoreet nunc, eu tempus odio. Praesent scelerisque rutrum
              massa non pharetra.
            </p>
            <p className={classes.CardLink}>
              Terminal <ion-icon name="chevron-forward-outline"></ion-icon>
            </p>
          </div>
        </CardComponent>
        <CardComponent link="/" class={classes.Card}>
          <div className={classes.CardImg}>
            <img src={cardImg} alt="card img" />
          </div>
          <div className={classes.CardContent}>
            <h3>Donec quis justo a felis tempus</h3>
            <p>
              Sed non laoreet nunc, eu tempus odio. Praesent scelerisque rutrum
              massa non pharetra.
            </p>
            <p className={classes.CardLink}>
              Terminal <ion-icon name="chevron-forward-outline"></ion-icon>
            </p>
          </div>
        </CardComponent>
        <CardComponent link="/" class={classes.Card}>
          <div className={classes.CardImg}>
            <img src={cardImg} alt="card img" />
          </div>
          <div className={classes.CardContent}>
            <h3>Donec quis justo a felis tempus</h3>
            <p>
              Sed non laoreet nunc, eu tempus odio. Praesent scelerisque rutrum
              massa non pharetra.
            </p>
            <p className={classes.CardLink}>
              Terminal <ion-icon name="chevron-forward-outline"></ion-icon>
            </p>
          </div>
        </CardComponent>
        <CardComponent link="/" class={classes.Card}>
          <div className={classes.CardImg}>
            <img src={cardImg} alt="card img" />
          </div>
          <div className={classes.CardContent}>
            <h3>Donec quis justo a felis tempus</h3>
            <p>
              Sed non laoreet nunc, eu tempus odio. Praesent scelerisque rutrum
              massa non pharetra.
            </p>
            <p className={classes.CardLink}>
              Terminal <ion-icon name="chevron-forward-outline"></ion-icon>
            </p>
          </div>
        </CardComponent>
        <CardComponent link="/" class={classes.Card}>
          <div className={classes.CardImg}>
            <img src={cardImg} alt="card img" />
          </div>
          <div className={classes.CardContent}>
            <h3>Donec quis justo a felis tempus</h3>
            <p>
              Sed non laoreet nunc, eu tempus odio. Praesent scelerisque rutrum
              massa non pharetra.
            </p>
            <p className={classes.CardLink}>
              Terminal <ion-icon name="chevron-forward-outline"></ion-icon>
            </p>
          </div>
        </CardComponent>
      </EmblaCarousel>
    </SectionComponent>
  );
};

export default hardwareComponent;
