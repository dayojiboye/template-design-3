import React from 'react';
import classes from './Sidedrawer.module.css';
import NavItems from '../NavItems/NavItems';
import SignInLink from '../SignInLink/SignInLink';

import UserDropdown from '../UserAccountDropdown/UserAccountDropdown';
import { Link } from 'react-router-dom';

const sideDrawer = (props) => {
  const showDropdownMenu = (event) => {
    event.currentTarget.nextSibling.classList.toggle(classes.Show);
    event.currentTarget.parentNode.classList.toggle(classes.Bg);
    event.currentTarget
      .querySelector('[data-chevron-nav]')
      .classList.toggle('flip');
  };

  let style = [classes.Sidedrawer];

  if (props.cartSlidebar) {
    style.push(null);
  } else if (props.showSideDrawer) {
    style.push(classes.Visible);
  }

  let userMenu = <SignInLink />;
  if (props.isAuthenticated) {
    userMenu = <UserDropdown showIcon />;
  }

  return (
    <div className={style.join(' ')}>
      <nav className={classes.Navbar}>
        <ul>
          <NavItems
            hasDropdown={classes.Hasdropdown}
            showDropdownMenu={showDropdownMenu}
            buttonNav={classes.ButtonNav}
            dropdownMenu={classes.DropdownMenu}
            showIcon
          />
          <li className={classes.NavLink}>{userMenu}</li>
          <li className={classes.NavLink}>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default sideDrawer;
