import React from 'react';
import { connect } from 'react-redux';
import classes from './Toolbar.module.css';
import NavItems from '../NavItems/NavItems';
import CartMenu from '../CartMenu/CartMenu';
import SignInLink from '../SignInLink/SignInLink';
import UserDropdown from '../UserAccountDropdown/UserAccountDropdown';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

const Toolbar = (props) => {
  let style = [classes.CartSlidebar];
  let toggleBtnStyle = [classes.DrawerToggleBtn];
  const badgeClasses = useStyles();
  let cartBtnStyle = [classes.CartBtn, badgeClasses.root];

  if (props.cartSlidebar) {
    style.push(classes.Show);
    cartBtnStyle.push(classes.Hide);
  }

  if (props.isSideDrawer || props.cartSlidebar) {
    toggleBtnStyle.push(classes.Change);
  }

  let userMenu = <SignInLink />;
  if (props.isAuthenticated) {
    userMenu = <UserDropdown />;
  }

  return (
    <header className={classes.Header}>
      <div className={classes.BrandLogo}>
        <Link to="/">BrandLogo</Link>
      </div>

      <nav className={classes.Navbar}>
        <div className={classes.MainNav}>
          <ul>
            <NavItems
              hasDropdown={classes.Hasdropdown}
              buttonNav={classes.ButtonNav}
              dropdownMenu={classes.DropdownMenu}
              showIcon={false}
            />
          </ul>
        </div>

        <div className={classes.ExtraNav}>
          <ul>
            <li>{userMenu}</li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        <div
          className={classes.CartDropdown}
          onClick={props.toggleCartSlidebar}
        >
          <button className={cartBtnStyle.join(' ')}>
            <Badge color="primary" badgeContent={props.cart.length}>
              <ion-icon name="cart-outline" data-nav-cart></ion-icon>
            </Badge>
          </button>

          {/* for desktop */}

          <div className={classes.CartDropMenu}>
            <CartMenu
              content={classes.CartContent}
              shopBtn={classes.ShopBtn}
              footer={classes.CartFooter}
              cart={props.cart}
            />
          </div>
        </div>

        {/* for mobile and tablets */}

        <div className={style.join(' ')}>
          <CartMenu
            content={classes.CartContent}
            shopBtn={classes.ShopBtn}
            footer={classes.CartFooter}
            cart={props.cart}
          />
        </div>
      </nav>

      <div className={toggleBtnStyle.join(' ')} onClick={props.showSideDrawer}>
        <div className={classes.Bar1}></div>
        <div className={classes.Bar2}></div>
        <div className={classes.Bar3}></div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Toolbar);
