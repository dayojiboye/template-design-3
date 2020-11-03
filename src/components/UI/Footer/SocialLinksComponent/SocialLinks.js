import React from 'react';
import classes from './SocialLinks.module.css';

const socialLinks = (props) => {
  return (
    <div className={classes.SocialLinks}>
      <div className={classes.Language}>
        <a href="/">English</a>
      </div>
      <div className={classes.SocLinks}>
        <div className="social">
          <a href="/">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
        <div className="social">
          <a href="/">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </div>
        <div className="social">
          <a href="/">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default socialLinks;
