import React from 'react';
import { makeStyles } from '@material-ui/styles';

import FormItem from './components/form-item';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'steelblue',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--content-height)',
    overflow: 'hidden',
    margin: 0,
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: '20px 40px',
    borderRadius: 5,
  },
  heading: {
    textAlign: 'center',
    marginBottom: 30,
  },
  btn: {
    cursor: 'pointer',
    display: 'inline-block',
    width: '100%',
    background: 'lightblue',
    padding: 15,
    fontFamily: 'inherit',
    fontSize: 16,
    border: 0,
    borderRadius: 5,
    '&:focus': {
      outline: 0,
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
  },
  text: {
    marginTop: 30,
  },
  link: {
    textDecoration: 'none',
    color: 'lightblue',
  },
});

const FormInputWave = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.heading}>Please Login</h1>
        <FormItem label="Email" />
        <FormItem label="Password" type="password" />
        <button className={classes.btn}>Login</button>

        <p className={classes.text}>
          Don't have an account? <span className={classes.link}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default FormInputWave;
