import React from 'react';
import classes from './Intro.module.css';
import IntroImage from '../../../assets/images/133-2742x1828.jpg';
import SectionComponent from '../../../hoc/SectionComponent/Section';
import { Link } from 'react-router-dom';

const IntroComponent = (props) => {
  return (
    <SectionComponent class={classes.Intro}>
      <div className={classes.IntroHeader}>
        <h1>Curabitur eu libero quam. Fusce interdum faucibus consectetur.</h1>
        <div className={classes.IntroStarted}>
          <Link className={classes.StartBtn} to="/signup">
            Get Started
          </Link>
          <a href="/" className={classes.IntroLink}>
            Contact Sales <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
      </div>
      <div className={classes.IntroImage}>
        <img src={IntroImage} alt="intro" />
      </div>
      <div className={classes.IntroSolutions}>
        <h2>Aliquam blandit sem vel porttitor mattis vel finibus leo.</h2>
        <a className={classes.SolutionBtn} href="/">
          View all solutions
        </a>
      </div>
    </SectionComponent>
  );
};

export default IntroComponent;
