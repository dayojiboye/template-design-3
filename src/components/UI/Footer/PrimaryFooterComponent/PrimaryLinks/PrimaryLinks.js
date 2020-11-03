import React, { Fragment } from 'react';
import classes from './PrimaryLinks.module.css';

import { Link } from 'react-router-dom';

const PrimaryLinks = (props) => {
  const toggleLink = (event) => {
    event.currentTarget.parentNode.nextSibling.classList.toggle(classes.Show);
    event.currentTarget
      .querySelector('[data-chevron-down]')
      .classList.toggle('rotate');
  };

  return (
    <Fragment>
      <li className={classes.PrimaryLink}>
        <div className={classes.PrimaryLinkHeader}>
          <span onClick={toggleLink}>
            Link{' '}
            <ion-icon name="chevron-down-outline" data-chevron-down></ion-icon>
          </span>
        </div>
        <div className={classes.PrimarySublink}>
          <Link to="/payments">Payments</Link>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
        </div>
      </li>
      <li className={classes.PrimaryLink}>
        <div className={classes.PrimaryLinkHeader}>
          <span onClick={toggleLink}>
            Link{' '}
            <ion-icon name="chevron-down-outline" data-chevron-down></ion-icon>
          </span>
        </div>
        <div className={classes.PrimarySublink}>
          <a href="/">Sub Links</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
        </div>
      </li>
      <li className={classes.PrimaryLink}>
        <div className={classes.PrimaryLinkHeader}>
          <span onClick={toggleLink}>
            Link{' '}
            <ion-icon name="chevron-down-outline" data-chevron-down></ion-icon>
          </span>
        </div>
        <div className={classes.PrimarySublink}>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
        </div>
      </li>
      <li className={classes.PrimaryLink}>
        <div className={classes.PrimaryLinkHeader}>
          <span onClick={toggleLink}>
            Link{' '}
            <ion-icon name="chevron-down-outline" data-chevron-down></ion-icon>
          </span>
        </div>
        <div className={classes.PrimarySublink}>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
        </div>
      </li>
      <li className={classes.PrimaryLink}>
        <div className={classes.PrimaryLinkHeader}>
          <span onClick={toggleLink}>
            Link{' '}
            <ion-icon name="chevron-down-outline" data-chevron-down></ion-icon>
          </span>
        </div>
        <div className={classes.PrimarySublink}>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
        </div>
      </li>
      <li className={classes.PrimaryLink}>
        <div className={classes.PrimaryLinkHeader}>
          <span onClick={toggleLink}>
            Link{' '}
            <ion-icon name="chevron-down-outline" data-chevron-down></ion-icon>
          </span>
        </div>
        <div className={classes.PrimarySublink}>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
        </div>
      </li>
      <li className={classes.PrimaryLink}>
        <div className={classes.PrimaryLinkHeader}>
          <span onClick={toggleLink}>
            Link{' '}
            <ion-icon name="chevron-down-outline" data-chevron-down></ion-icon>
          </span>
        </div>
        <div className={classes.PrimarySublink}>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
        </div>
      </li>
      <li className={classes.PrimaryLink}>
        <div className={classes.PrimaryLinkHeader}>
          <span onClick={toggleLink}>
            Link{' '}
            <ion-icon name="chevron-down-outline" data-chevron-down></ion-icon>
          </span>
        </div>
        <div className={classes.PrimarySublink}>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
          <a href="/">Sub Link</a>
        </div>
      </li>
    </Fragment>
  );
};

export default PrimaryLinks;
