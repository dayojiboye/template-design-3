import React, { Fragment } from 'react';
import classes from './Top.module.css';

import listImg from '../../../../assets/icons/list.svg';
import handShakeImg from '../../../../assets/icons/partnership-handshake.svg';
import keyImg from '../../../../assets/icons/key.svg';

import { Fade } from 'react-awesome-reveal';

const top = (props) => {
  return (
    <Fragment>
      <div className={classes.Heading}>
        <h1>Let's create your account.</h1>
        <p>
          Orci varius natoque et magnis dis parturient montes - nascetur ridics
          mus ornare eget.
        </p>
      </div>
      <div className={classes.Grid}>
        <div className={classes.GridItem}>
          <Fade direction="bottom" triggerOnce>
            <div className={classes.Icon}>
              <img src={listImg} alt="icon" />
            </div>
            <div className={classes.Content}>
              <small>Lorem ipsum</small>
              <p>
                Vivamus mattis nibh eu sem ornare, id porttitor diam venenatis.
              </p>
            </div>
          </Fade>
        </div>
        <div className={classes.GridItem}>
          <Fade direction="bottom" delay={300} triggerOnce>
            <div className={classes.Icon}>
              <img src={handShakeImg} alt="icon" />
            </div>
            <div className={classes.Content}>
              <small>Lorem ipsum</small>
              <p>
                Vivamus mattis nibh eu sem ornare, id porttitor diam venenatis.
              </p>
            </div>
          </Fade>
        </div>
        <div className={classes.GridItem}>
          <Fade direction="bottom" delay={600} triggerOnce>
            <div className={classes.Icon}>
              <img src={keyImg} alt="icon" />
            </div>
            <div className={classes.Content}>
              <small>Lorem ipsum</small>
              <p>
                Vivamus mattis nibh eu sem ornare, id porttitor diam venenatis.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </Fragment>
  );
};

export default top;
