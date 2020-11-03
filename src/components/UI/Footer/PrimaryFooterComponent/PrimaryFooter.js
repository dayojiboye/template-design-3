import React from 'react';
import classes from './PrimaryFooter.module.css';
import PrimaryLinks from './PrimaryLinks/PrimaryLinks';

const primaryFooter = (props) => {
  return (
    <nav className={classes.PrimaryNav}>
      <ul>
        <PrimaryLinks />
      </ul>
    </nav>
  );
};

export default primaryFooter;
