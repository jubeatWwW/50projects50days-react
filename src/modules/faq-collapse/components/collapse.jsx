import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  collapse: props => ({
    backgroundColor: props.active ? '#fff' : 'transparent',
    border: '1px solid #9fa4a8',
    borderRadius: 10,
    margin: '20px 0',
    padding: 30,
    position: 'relative',
    overflow: 'hidden',
    transition: '0.3s ease',
    boxShadow: props.active
      ? '0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1)'
      : 'none',
    '&::before, &::after': {
      content: `'\\f075'`,
      display: props.active ? 'block' : 'none',
      fontFamily: 'Font Awesome 5 Free',
      color: '#2ecc71',
      fontSize: '7rem',
      position: 'absolute',
      opacity: 0.2,
      top: 20,
      left: 20,
      zIndex: 0,
    },
    '&::before': {
      color: '#3498db',
      top: '-10px',
      left: '-30px',
      transform: 'rotateY(180deg)',
    },
  }),
  heading: {
    margin: '0 35px 0 0',
  },
  content: props => ({
    display: props.active ? 'block' : 'none',
    margin: '30px 0 0',
  }),
  toggle: props => ({
    backgroundColor: props.active ? '#9fa4a8' : 'transparent',
    border: 0,
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    padding: 0,
    position: 'absolute',
    top: 30,
    right: 30,
    height: 30,
    width: 30,
    '&:focus': {
      outline: 0,
    },
  }),
  times: props => ({
    display: props.active ? 'block' : 'none',
    color: props.active ? '#fff' : 'black',
  }),
  arrow: props => ({
    display: props.active ? 'none' : 'block',
  }),
});

const Collapse = props => {
  const [active, setActive] = useState(props.index === 0);
  const classes = useStyles({ active });

  const onClick = useCallback(() => {
    setActive(active => !active);
  }, []);

  return (
    <div className={classes.collapse}>
      <h3 className={classes.heading}>{props.title}</h3>
      <p className={classes.content}>{props.children}</p>
      <button className={classes.toggle} onClick={onClick}>
        <i className={`fas fa-chevron-down ${classes.arrow}`}></i>
        <i className={`fas fa-times ${classes.times}`}></i>
      </button>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

Collapse.defaultProps = {
  title: '',
  index: 0,
};

export default Collapse;
