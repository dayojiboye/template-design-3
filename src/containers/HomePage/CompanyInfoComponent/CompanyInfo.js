import React from 'react';
import classes from './CompanyInfo.module.css';
import SectionComponent from '../../../hoc/SectionComponent/Section';

const companyInfo = (props) => {
  return (
    <SectionComponent class={classes.CompanyInfo}>
      <div className={classes.Content}>
        <small>
          * Phasellus suscipit cursus blandit. Integer quam mi, sodales quis
          augue sed, tincidunt interdum justo. Ut non nulla mi. Curabitur
          interdum gravida turpis, ac placerat lacus pulvinar et. Ut quis
          porttitor tellus, at porttitor lorem. Quisque at auctor purus. Duis
          semper pretium lectus, sit amet consequat est auctor in. Vestibulum
          quis aliquam dui.
        </small>
      </div>
    </SectionComponent>
  );
};

export default companyInfo;
