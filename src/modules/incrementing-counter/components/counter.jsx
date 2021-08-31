import React, { useState, useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '30px 50px',
  },
  counter: {
    fontSize: 60,
    marginTop: 10,
  },
});

const Counter = props => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const increment = useMemo(() => props.target / 200, [props.target]);

  const countdown = useCallback(
    (current = 0) => {
      if (current < props.target) {
        setCount(Math.ceil(current + increment));
        setTimeout(() => {
          countdown(current + increment);
        }, 1);
      } else {
        setCount(props.target);
      }
    },
    [props.target, increment]
  );

  useEffect(() => {
    countdown();
  }, [countdown]);

  return (
    <div className={classes.container}>
      <i className={props.icon}></i>
      <div className={classes.counter} data-target={props.target}>
        {count}
      </div>
      <span>{props.label}</span>
    </div>
  );
};

Counter.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  target: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  label: '',
  icon: '',
  target: 0,
};

export default Counter;
