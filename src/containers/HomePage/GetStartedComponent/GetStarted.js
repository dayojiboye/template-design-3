import React from 'react';
import classes from './GetStarted.module.css';
import SectionComponent from '../../../hoc/SectionComponent/Section';
import { Link } from 'react-router-dom';

const getStartedComponent = (props) => {
  return (
    <SectionComponent class={classes.Started}>
      <div className={classes.StartedContent}>
        <h2>Curabitur eu libero quam.</h2>
        <p>
          Etiam ultrices ornare urna at scelerisque nisl fringilla quis faucibus
          at accumsan nec laoreet a est.
        </p>
        <Link to="/signup">Get started</Link>
      </div>
    </SectionComponent>
  );
};

export default getStartedComponent;
