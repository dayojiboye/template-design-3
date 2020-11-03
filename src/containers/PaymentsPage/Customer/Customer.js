import React from 'react';
import classes from './Customer.module.css';

import SectionComponent from '../../../hoc/SectionComponent/Section';

const customer = (props) => {
  return (
    <SectionComponent class={classes.Customer}>
      <h4>
        "Aliquam ultricies quam sodales, dapibus dolor quis, pharetra nulla.
        Aenean eget orci vel ex rutrum convallis sed ac magna. Duis semper, ante
        ut gravida commodo, nisi est cursus tellus, blandit varius nibh metus
        vitae lectus. In convallis erat sit amet rhoncus fringilla."
      </h4>
      <h6>JOHN DOE, DOEMAN DELIVERIES, DOPE CITY, DC</h6>
    </SectionComponent>
  );
};

export default customer;
