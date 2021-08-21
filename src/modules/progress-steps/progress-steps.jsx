import React, { useState, useCallback } from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Steps from './components/steps';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    height: '85vh',
    display: 'flex',
    alignItems: 'center',
  },
  stepsContainer: {
    width: '100%',
  },
});

const ColorButton = withStyles({
  root: {
    margin: 5,
    padding: '8px 30px',
    color: 'white',
    backgroundColor: 'var(--line-border-fill)',
    borderRadius: 6,
  },
})(Button);

const steps = [...Array(5)].map((_, index) => ({ component: index + 1 }));

const ProgressSteps = props => {
  const classes = useStyles();
  const [active, setActive] = useState(0);

  const handleClick = useCallback((increment = 0) => {
    setActive(num => {
      const newNum = num + increment;
      if (newNum < steps.length && newNum >= 0) {
        return newNum;
      }
      return num;
    });
  }, []);
  return (
    <Container maxWidth="sm" className={classes.container}>
      <div className={classes.stepsContainer}>
        <Steps steps={steps} active={active} />
        <ColorButton
          variant="contained"
          disabled={active <= 0}
          onClick={() => handleClick(-1)}
        >
          Prev
        </ColorButton>
        <ColorButton
          variant="contained"
          disabled={active >= steps.length - 1}
          onClick={() => handleClick(1)}
        >
          Next
        </ColorButton>
      </div>
    </Container>
  );
};

export default ProgressSteps;
