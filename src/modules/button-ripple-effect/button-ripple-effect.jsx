import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Button from './components/button';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#000',
    fontFamily: '"Roboto", sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--content-height)',
    overflow: 'hidden',
    margin: 0,
  },
});

const ButtonRippleEffect = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>Click Me</Button>
    </div>
  );
};

export default ButtonRippleEffect;
