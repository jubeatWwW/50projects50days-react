import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  btn: {
    backgroundColor: 'rebeccapurple',
    borderRadius: 5,
    border: 'none',
    color: '#fff',
    margin: '1rem',
    padding: '1.5rem 3rem',
    fontSize: '1.2rem',
    fontFamily: 'inherit',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.9,
    },
    '&:focus': {
      outline: 'none',
    },
  },
});

const SoundButton = props => {
  const classes = useStyles();

  return (
    <button className={classes.btn} onClick={() => props.onClick(props.label)}>
      {props.label}
    </button>
  );
};

SoundButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SoundButton.defaultProps = {
  label: '',
};

export default SoundButton;
