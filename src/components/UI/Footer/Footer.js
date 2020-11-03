import React from 'react';
import classes from './Footer.module.css';
import PrimaryFooter from './PrimaryFooterComponent/PrimaryFooter';
import SocialLinks from './SocialLinksComponent/SocialLinks';
import DestinationLinks from './DestinationLinksComponent/DestinationLinks';

const footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <PrimaryFooter />
      <SocialLinks />
      <DestinationLinks />
    </footer>
  );
};

export default footer;
