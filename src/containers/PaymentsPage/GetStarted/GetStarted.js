import React from 'react';
import classes from './GetStarted.module.css';

import { Link } from 'react-router-dom';

import SectionComponent from '../../../hoc/SectionComponent/Section';

const getStarted = (props) => {
  return (
    <SectionComponent class={classes.Start}>
      <h2>Quisque at auctor purus.</h2>
      <Link to="/signup">Get started</Link>
    </SectionComponent>
  );
};

export default getStarted;
