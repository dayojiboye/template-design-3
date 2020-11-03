import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

const navItems = (props) => {
  let icon = null;

  if (props.showIcon) {
    icon = <ion-icon name="chevron-down-outline" data-chevron-nav></ion-icon>;
  }

  return (
    <Fragment>
      <li className={props.hasDropdown}>
        <button className={props.buttonNav} onClick={props.showDropdownMenu}>
          Link {icon}
        </button>
        <div className={props.dropdownMenu}>
          <Link to="/payments">Payments</Link>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
        </div>
      </li>
      <li className={props.hasDropdown}>
        <button className={props.buttonNav} onClick={props.showDropdownMenu}>
          Link {icon}
        </button>
        <div className={props.dropdownMenu}>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
        </div>
      </li>
      <li className={props.hasDropdown}>
        <button className={props.buttonNav} onClick={props.showDropdownMenu}>
          Link {icon}
        </button>
        <div className={props.dropdownMenu}>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
        </div>
      </li>
      <li className={props.hasDropdown}>
        <button className={props.buttonNav} onClick={props.showDropdownMenu}>
          Link {icon}
        </button>
        <div className={props.dropdownMenu}>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
        </div>
      </li>
      <li className={props.hasDropdown}>
        <button className={props.buttonNav} onClick={props.showDropdownMenu}>
          Link {icon}
        </button>
        <div className={props.dropdownMenu}>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
          <a href="/">Sublink</a>
        </div>
      </li>
    </Fragment>
  );
};

export default navItems;
