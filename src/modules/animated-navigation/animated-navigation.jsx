import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#eafbff',
    backgroundImage: `linear-gradient(
      to bottom,
      #eafbff 0%,
      #eafbff 50%,
      #5290f9 50%,
      #5290f9 100%
    )`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--content-height)',
    margin: 0,
  },
  nav: props => ({
    backgroundColor: '#fff',
    padding: 20,
    width: props.active ? 350 : 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    transition: 'width 0.6s linear',
    overflowX: 'hidden',
  }),
  list: props => ({
    display: 'flex',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    width: props.active ? '100%' : 0,
    transition: 'width 0.6s linear',
  }),
  item: props => ({
    transform: props.active ? 'rotateY(360deg)' : 'rotateY(0deg)',
    opacity: props.active ? 1 : 0,
    transition: 'transform 0.6s linear, opacity 0.6s linear',
  }),
  link: {
    position: 'relative',
    color: '#000',
    textDecoration: 'none',
    margin: '0 10px',
  },
  icon: {
    backgroundColor: '#fff',
    border: 0,
    cursor: 'pointer',
    padding: 0,
    position: 'relative',
    height: 30,
    width: 30,
    '&:focus': {
      outline: 0,
    },
  },
  line: {
    backgroundColor: '#5290f9',
    height: 2,
    width: 20,
    position: 'absolute',
    top: 10,
    left: 5,
    transition: 'transform 0.6s linear',
  },
  line1: props => ({
    transform: props.active ? 'rotate(-765deg) translateY(5.5px)' : '',
  }),
  line2: props => ({
    transform: props.active ? 'rotate(765deg) translateY(-5.5px)' : '',
    top: 'auto',
    bottom: 10,
  }),
});

const items = ['Home', 'Works', 'About', 'Contract'];

const AnimatedNavigation = () => {
  const [active, setActive] = useState(true);
  const classes = useStyles({ active });

  const onClick = useCallback(() => {
    setActive(active => !active);
  }, []);

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          {items.map(item => (
            <li key={item} className={classes.item}>
              <a href="#?" className={classes.link}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className={classes.icon} onClick={onClick}>
          <div className={`${classes.line} ${classes.line1}`}></div>
          <div className={`${classes.line} ${classes.line2}`}></div>
        </button>
      </nav>
    </div>
  );
};

export default AnimatedNavigation;
