import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  btn: {
    backgroundColor: 'purple',
    color: '#fff',
    border: '1px purple solid',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 2,
    padding: '20px 30px',
    overflow: 'hidden',
    margin: '10px 0',
    position: 'relative',
    '&:focus': {
      outline: 'none',
    },
  },
  circle: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: '50%',
    transform: 'translate(-50%, -50%) scale(0)',
    animation: 'ripple 0.5s ease-out',
  },
});

const Button = props => {
  const classes = useStyles();
  const [active, setActive] = useState(true);
  const [position, setPosition] = useState({});

  const onClick = useCallback(e => {
    const { offsetX, offsetY } = e.nativeEvent;
    setPosition({ x: offsetX, y: offsetY });
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 500);
  }, []);

  return (
    <button onClick={onClick} className={classes.btn}>
      {props.children}
      {active ? (
        <span
          className={classes.circle}
          style={{ top: position.y, left: position.x }}
        ></span>
      ) : null}
    </button>
  );
};

export default Button;
