import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  progress: props => ({
    backgroundColor: 'var(--line-border-fill)',
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    height: 4,
    width: `${props.percent}%`,
    zIndex: -1,
    transition: '0.4s ease',
  }),
});

const Progress = props => {
  const classes = useStyles(props);
  return <div className={classes.progress}></div>;
};

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
};

Progress.defaultProps = {
  percent: 0,
};

export default Progress;
