import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  circle: props => ({
    backgroundColor: '#fff',
    color: '#999',
    borderRadius: '50%',
    height: 30,
    width: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: props.active
      ? '3px solid var(--line-border-fill)'
      : '3px solid var(--line-border-empty)',
    transition: '0.4s ease',
  }),
});

const Step = props => {
  const classes = useStyles(props);
  return <div className={classes.circle}>{props.children}</div>;
};

Step.propTypes = {
  active: PropTypes.bool,
};

Step.defaultProps = {
  active: false,
};

export default Step;
