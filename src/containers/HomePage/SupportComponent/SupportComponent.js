import React from 'react';
import classes from './SupportComponent.module.css';
import SectionComponent from '../../../hoc/SectionComponent/Section';
import CardComponent from '../../../hoc/CardComponent/Card';

const supportComponent = (props) => {
  let style = [classes.Card, classes.Right];

  return (
    <SectionComponent class={classes.Support}>
      <div className={classes.SupportHeader}>
        <h2>Cras tristique dictum pellentesque.</h2>
      </div>
      <div className={classes.SupportCards}>
        <CardComponent class={style.join(' ')} link="/">
          <div className={classes.CardContent}>
            <h3>Curabitur eu libero quam.</h3>
            <p>Maecenas in dignissim lectus. Ut eu malesuada nulla.</p>
            <p className={classes.CardLink}>
              Chat with an{' '}
              <span className={classes.Word}>
                agent <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </p>
          </div>
        </CardComponent>
        <CardComponent class={classes.Card} link="/">
          <div className={classes.CardContent}>
            <h3>Curabitur eu libero quam.</h3>
            <p>Maecenas in dignissim lectus. Ut eu malesuada nulla.</p>
            <p className={classes.CardLink}>
              Visit our support{' '}
              <span className={classes.Word}>
                center <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </p>
          </div>
        </CardComponent>
      </div>
    </SectionComponent>
  );
};

export default supportComponent;
