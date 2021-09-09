import React, { useCallback, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';

import Context from '../context';

import Cup from './cup';

const useStyles = makeStyles({
  cups: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
  },
});

const Cups = () => {
  const classes = useStyles();

  const { active, setActive } = useContext(Context);

  const onClick = useCallback(
    index => {
      if (active === index) {
        setActive(active => active - 1);
      } else {
        setActive(index);
      }
    },
    [active, setActive]
  );

  return (
    <div className={classes.cups}>
      {[...Array(8)].map((_, index) => (
        <Cup
          key={index}
          filled={index <= active}
          size="small"
          onClick={() => onClick(index)}
        >
          250 ml
        </Cup>
      ))}
    </div>
  );
};

export default Cups;
