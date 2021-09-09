import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const SIZE_STYLES = {
  small: props => ({
    height: 95,
    width: 50,
    borderRadius: '0 0 15px 15px',
    backgroundColor: props.filled ? '#6ab3f8' : 'rgba(255, 255, 255, 0.9)',
    margin: 5,
    cursor: 'pointer',
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: '0.3s ease',
  }),
  normal: props => ({
    height: 330,
    width: 150,
    borderRadius: '0 0 40px 40px',
    backgroundColor: '#fff',
    margin: '30px 0',
  }),
};

const useStyles = makeStyles({
  cup: props => ({
    border: '4px solid #144fc6',
    color: props.filled ? '#fff' : '#144fc6',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    ...(SIZE_STYLES[props.size]
      ? SIZE_STYLES[props.size](props)
      : SIZE_STYLES['normal'](props)),
  }),
});

const Cup = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.cup} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

Cup.propTypes = {
  size: PropTypes.string.isRequired,
  filled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

Cup.defaultProps = {
  size: 'normal',
  filled: false,
};

export default Cup;
