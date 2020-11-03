import React from 'react';
import classes from './Resources.module.css';

import SectionComponent from '../../../hoc/SectionComponent/Section';

const resources = (props) => {
  return (
    <SectionComponent class={classes.Resources}>
      <h2>Lorem ipsum</h2>
      <div className={classes.Grid}>
        <div className={classes.GridItem}>
          <p>Quisque tempus purus a consectetur elementum lorem</p>
          <a href="/">
            Read more <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
        <div className={classes.GridItem}>
          <p>Quisque tempus purus a consectetur elementum lorem</p>
          <a href="/">
            Read more <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
        <div className={classes.GridItem}>
          <p>Quisque tempus purus a consectetur elementum lorem</p>
          <a href="/">
            Read more <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
        <div className={classes.GridItem}>
          <p>Quisque tempus purus a consectetur elementum lorem</p>
          <a href="/">
            Read more <ion-icon name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
      </div>
    </SectionComponent>
  );
};

export default resources;
