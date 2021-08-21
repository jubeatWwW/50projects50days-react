import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    top: -100,
    left: -100,
  },
  circle: props => ({
    backgroundColor: '#ff7979',
    height: 200,
    width: 200,
    borderRadius: '50%',
    position: 'relative',
    transition: 'transform 0.5s linear',
    transform: props.showNav ? 'rotate(-70deg)' : '',
  }),
  button: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: 100,
    background: 'transparent',
    border: 0,
    fontSize: 26,
    color: '#fff',
    '&:focus': { outline: 'none' },
  },
  openBtn: {
    left: '60%',
  },
  closeBtn: {
    top: '60%',
    transform: 'rotate(90deg)',
    transformOrigin: 'top left',
  },
});

const Circle = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <div className={classes.circle}>
        <button
          className={`${classes.button} ${classes.closeBtn}`}
          onClick={() => props.setShowNav && props.setShowNav(false)}
        >
          <i className="fas fa-times"></i>
        </button>
        <button
          className={`${classes.button} ${classes.openBtn}`}
          onClick={() => props.setShowNav && props.setShowNav(true)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

Circle.propTypes = {
  showNav: PropTypes.bool.isRequired,
  setShowNav: PropTypes.func.isRequired,
};

Circle.defaultProps = {
  showNav: false,
};

export default Circle;
