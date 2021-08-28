import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import Key from './key';

const useStyles = makeStyles({
  label: {
    position: 'absolute',
    top: -24,
    left: 0,
    textAlign: 'center',
    width: '100%',
    color: '#555',
    fontSize: 14,
  },
});

const KeyField = props => {
  const classes = useStyles();

  return (
    <Key>
      {props.content}
      <small className={classes.label}>{props.label}</small>
    </Key>
  );
};

KeyField.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
};

KeyField.defaultProps = {
  label: '',
  content: '',
};

export default KeyField;
