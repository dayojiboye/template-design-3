import React from 'react';
import classes from './Alert.module.css';

const alert = (props) => {
  let style = [classes.Alert];
  if (props.show) {
    style.push(classes.Show);
  }

  return (
    <div className={style.join(' ')}>
      {props.children}
      <button className={classes.AlertBtn} onClick={props.clicked}>
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </div>
  );
};

export default alert;
