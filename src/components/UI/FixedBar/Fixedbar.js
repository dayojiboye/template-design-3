import React from 'react';

import { Link } from 'react-router-dom';

const fixedBar = (props) => {
  return (
    <div className={props.class}>
      <div className={props.startBtn}>
        <Link to="/signup">{props.btnContent}</Link>
      </div>
    </div>
  );
};

export default fixedBar;
