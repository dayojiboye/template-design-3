import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const cartMenu = (props) => {
  let items = 'No item in your cart';

  if (props.cart.length > 0) {
    items = props.cart.length + ' item(s) in your cart';
  }

  return (
    <Fragment>
      <div className={props.content}>
        <h4>Your cart</h4>
        <p>{items}</p>
        <div className={props.shopBtn}>
          <Link to="/shop">Shop cars</Link>
        </div>
      </div>
      <div className={props.footer}>
        <Link to="/cart">View cart</Link>
        <Link to="/orders">Order history</Link>
      </div>
    </Fragment>
  );
};

export default cartMenu;
