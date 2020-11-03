import React from 'react';
import classes from './Modal.module.css';

import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 5,
    marginTop: '5rem',
    maxWidth: '550px',
    [theme.breakpoints.down('xs')]: {
      margin: '0',
      borderRadius: '0',
      maxWidth: '95%',
    },
  },
  paperFullWidth: {
    [theme.breakpoints.down('xs')]: { width: '100%' },
  },
}));

const Modal = (props) => {
  const styles = useStyles();

  return (
    <Dialog
      open={props.isModal}
      onClose={props.dismissModal}
      scroll="body"
      TransitionComponent={Slide}
      TransitionProps={{ direction: 'up' }}
      transitionDuration={1000}
      fullWidth={true}
      maxWidth={false}
      classes={{ paper: styles.root, paperFullWidth: styles.paperFullWidth }}
    >
      <div className={classes.Dismiss}>
        <button className={classes.DismissBtn}>
          <ion-icon
            name="close-outline"
            onClick={props.dismissModal}
          ></ion-icon>
        </button>
      </div>
      <Paper
        style={{ padding: '0 2rem', paddingBottom: '3rem', boxShadow: 'none' }}
      >
        {props.children}
      </Paper>
    </Dialog>
  );
};

export default Modal;
