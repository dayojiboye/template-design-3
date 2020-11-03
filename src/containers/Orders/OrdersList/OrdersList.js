import React from 'react';
import classes from './OrdersList.module.css';

const table = (props) => {
  let orderHistory = props.orders.map((order) => {
    return (
      <li key={order.id}>
        <p>{order.date}</p>
        <p>{order.car}</p>
        <p>
          ${order.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
        </p>
      </li>
    );
  });

  return <ul className={classes.OrdersList}>{orderHistory}</ul>;
};

export default table;
