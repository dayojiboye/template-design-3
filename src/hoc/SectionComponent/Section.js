import React from 'react';

const sectionComponent = (props) => {
  return <section className={props.class}>{props.children}</section>;
};

export default sectionComponent;
