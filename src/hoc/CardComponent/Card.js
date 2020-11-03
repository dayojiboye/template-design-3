import React from 'react';

const cardComponent = (props) => {
  let card = null;

  if (props.normal) {
    card = (
      <div className={props.class} onClick={props.clicked}>
        {props.children}
      </div>
    );
  } else {
    card = (
      <a className={props.class} href={props.link}>
        {props.children}
      </a>
    );
  }

  return card;
};

export default cardComponent;
