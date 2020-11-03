import React from 'react';
import classes from './UserAccountDropdown.module.css';

import { Link } from 'react-router-dom';

const userAccountDropdown = (props) => {
  let icon = null;
  let showDropdownMenu = null;

  if (props.showIcon) {
    icon = <ion-icon name="chevron-down-outline" data-chevron-nav></ion-icon>;

    showDropdownMenu = (event) => {
      event.currentTarget.nextSibling.classList.toggle(classes.Show);
      event.currentTarget.parentNode.classList.toggle(classes.Bg);
      event.currentTarget
        .querySelector('[data-chevron-nav]')
        .classList.toggle('flip');
    };
  }

  return (
    <div className={classes.UserDropdown}>
      <button onClick={showDropdownMenu}>My Account {icon}</button>
      <div className={classes.DropdownMenu}>
        <a href="/">Sublink</a>
        <a href="/">Sublink</a>
        <a href="/">Sublink</a>
        <Link to="/logout">Sign Out</Link>
      </div>
    </div>
  );
};

export default userAccountDropdown;
