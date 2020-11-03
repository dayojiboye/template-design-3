import React from 'react';
import classes from './PaymentsPromise.module.css';

import SectionComponent from '../../../hoc/SectionComponent/Section';
import ColImg1 from '../../../assets/images/vw-3708347_960_720.jpg';
import ColImg2 from '../../../assets/images/vw-3708342_960_720.jpg';

const paymentsPromise = (props) => {
  return (
    <SectionComponent class={classes.PaymentsPromise}>
      <div className={classes.PromiseInfo}>
        <h2>Cras tristique dictum</h2>
        <p>
          Maecenas varius et velit ac porttitor. Mauris ac semper ex. Donec
          aliquet molestie ante sed viverra.
        </p>
      </div>
      <div className={classes.PromiseGrid}>
        <div className={classes.Col1}>
          <div className={classes.ColImg}>
            <img src={ColImg1} alt="first img" />
          </div>
          <p>Etiam eget suscipit purus.</p>
        </div>
        <div className={classes.Col2}>
          <div className={classes.ColImg}>
            <img src={ColImg2} alt="first img" />
          </div>
          <p>Etiam eget suscipit purus.</p>
        </div>
      </div>
    </SectionComponent>
  );
};

export default paymentsPromise;
