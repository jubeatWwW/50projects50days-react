import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const styles = {
  leftBgColor: 'rgba(44, 43, 95, 0.7)',
  rightBgColor: 'rgba(43, 43, 43, 0.8)',
  leftBtnHoverColor: 'rgba(87, 84, 236, 1)',
  rightBtnHoverColor: 'rgba(28, 122, 28, 1)',
  speed: '1000ms',
};

const hoverWidths = {
  left: '75%',
  right: '25%',
};

const otherWidths = {
  left: '25%',
  right: '75%',
};

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    height: 'var(--content-height)',
    background: '#333',
  },
  split: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: `all ${styles.speed} ease-in-out`,
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      transition: `all ${styles.speed} ease-in-out`,
    },
  },
  left: props => ({
    left: 0,
    width: hoverWidths[props.hover],
    backgroundImage:
      "url('https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80')",
    '& h1': {
      top: '5%',
    },
    '& button:hover': {
      backgroundColor: styles.leftBtnHoverColor,
      borderColor: styles.leftBtnHoverColor,
    },
    '&:before': {
      backgroundColor: styles.leftBgColor,
    },
  }),
  right: props => ({
    right: 0,
    width: otherWidths[props.hover],
    backgroundImage:
      "url('https://images.unsplash.com/photo-1570083208073-f0c09ea8dcf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')",
    '& h1': {
      bottom: '10%',
    },
    '& button:hover': {
      backgroundColor: styles.rightBtnHoverColor,
      borderColor: styles.rightBtnHoverColor,
    },
    '&:before': {
      backgroundColor: styles.rightBgColor,
    },
  }),
  heading: {
    fontSize: '4rem',
    color: '#fff',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    whiteSpace: 'nowrap',
  },
  btn: {
    position: 'absolute',
    left: '50%',
    top: '40%',
    transform: 'translateX(-50%)',
    color: '#fff',
    border: '#fff solid 0.2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '15rem',
    padding: '1.5rem',
  },
  hovered: {
    width: styles.hoverWidth,
  },
  other: {
    width: styles.otherWidth,
  },
});

const SplitLandingPage = () => {
  const [hover, setHover] = useState('');
  const classes = useStyles({ hover });

  const onMouseEnter = useCallback(dir => {
    setHover(dir);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHover('');
  }, []);

  return (
    <div className={classes.root}>
      <div
        className={`${classes.split} ${classes.left}`}
        onMouseEnter={() => onMouseEnter('left')}
        onMouseLeave={() => onMouseLeave()}
      >
        <h1 className={classes.heading}>Woof!</h1>
        <Button className={classes.btn} variant="outlined">
          Buy Now
        </Button>
      </div>
      <div
        className={`${classes.split} ${classes.right}`}
        onMouseEnter={() => onMouseEnter('right')}
        onMouseLeave={() => onMouseLeave()}
      >
        <h1 className={classes.heading}>Meow!</h1>
        <Button className={classes.btn} variant="outlined">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default SplitLandingPage;
