import React from 'react';
import classes from './MerchantServices.module.css';

import SectionComponent from '../../../hoc/SectionComponent/Section';

const merchant = (props) => {
  return (
    <SectionComponent class={classes.Merchant}>
      <hr className={classes.MerchantBorder} />
      <div className={classes.Content}>
        <h2>Vestibulum efficitur arcu a felis dictum varius at vel felis.</h2>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla facilisi. Aenean vel enim massa.
          Pellentesque eget massa ac leo consectetur cursus.
        </p>
        <a href="/">
          Visit Merchant{' '}
          <span className={classes.Word}>
            Services <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </a>
      </div>
      <hr className={classes.MerchantBorder} />
    </SectionComponent>
  );
};

export default merchant;
