import React from 'react';
import classes from './DestinationLinks.module.css';

const destinationLinks = (props) => {
  return (
    <div className={classes.DestinationLinks}>
      <div className={classes.Copyright}>
        <small>&copy; 2020 Brand, Inc.</small>
      </div>
      <div className={classes.DestLinks}>
        <div className={classes.Dlink}>
          <a href="/">Link</a>
        </div>
        <div className={classes.Dlink}>
          <a href="/">Link</a>
        </div>
        <div className={classes.Dlink}>
          <a href="/">Link</a>
        </div>
        <div className={classes.Dlink}>
          <a href="/">Link</a>
        </div>
        <div className={classes.Dlink}>
          <a href="/">Link</a>
        </div>
        <div className={classes.Dlink}>
          <a href="/">Link</a>
        </div>
      </div>
    </div>
  );
};

export default destinationLinks;
