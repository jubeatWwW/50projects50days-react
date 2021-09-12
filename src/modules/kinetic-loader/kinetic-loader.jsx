import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#2c3e50',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--content-height)',
    overflow: 'hidden',
    margin: 0,
  },
  kinetic: {
    position: 'relative',
    height: 80,
    width: 80,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      border: '50px solid transparent',
      borderBottomColor: '#fff',
      animation: 'Kinetic-rotate-a 2s linear infinite 0.5s',
    },
    '&:before': {
      transform: 'rotate(90deg)',
      animation: 'Kinetic-rotate-b 2s linear infinite',
    },
  },
});

const KineticLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.kinetic}></div>
    </div>
  );
};

export default KineticLoader;
