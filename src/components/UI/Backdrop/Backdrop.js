import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
  let backdrop = null;

  if (props.cartSlidebar || props.sideDrawer) {
    backdrop = <div className={classes.Backdrop} onClick={props.hide}></div>;
  }

  return backdrop;
};

export default backdrop;
