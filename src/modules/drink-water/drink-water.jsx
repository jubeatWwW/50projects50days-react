import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import RemainedCup from './components/remained-cup';
import Cups from './components/cups';

import Context from './context';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#3494e4',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'var(--content-height)',
  },
  h1: {
    margin: '10px 0 0',
  },
  h3: {
    fontWeight: 400,
    margin: '10px 0',
  },
  text: {
    textAlign: 'center',
    margin: '0 0 5px',
  },
});

const DrinkWater = () => {
  const classes = useStyles();
  const [active, setActive] = useState(-1);

  return (
    <Context.Provider value={{ active, setActive }}>
      <div className={classes.root}>
        <h1 className={classes.h1}>Drink Water</h1>
        <h3 className={classes.h3}>Goal: 2 Liters</h3>
        <RemainedCup />

        <p className={classes.text}>
          Select how many glasses of water that you have drank
        </p>
        <Cups />
      </div>
    </Context.Provider>
  );
};

export default DrinkWater;
