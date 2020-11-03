import React from 'react';
import classes from './CartTable.module.css';

const table = (props) => {
  let items = (
    <h3 style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
      Your cart is empty
    </h3>
  );

  if (props.cart.length > 0) {
    items = (
      <table className={classes.Table}>
        <tbody>
          {props.cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>
                  <img src={item.image} alt="car img" />
                </td>
                <td>
                  <p>
                    $
                    {item.price
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </p>
                </td>
                <td>
                  <button
                    onClick={props.clicked.bind(this, item.id, item.price)}
                  >
                    <ion-icon name="trash-outline"></ion-icon>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return items;
};

export default table;
