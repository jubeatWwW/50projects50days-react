import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import Progress from './progress';
import Step from './step';

const useStyles = makeStyles({
  progressContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: 30,
    maxWidth: '100%',
    '&::before': {
      content: '""',
      backgroundColor: 'var(--line-border-empty)',
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      height: 4,
      width: '100%',
      zIndex: -1,
    },
  },
});

const Steps = props => {
  const classes = useStyles();
  const percent = useMemo(
    () => (props.active / (props.steps.length - 1)) * 100 || 0,
    [props.active, props.steps.length]
  );
  return (
    <div className={classes.progressContainer}>
      <Progress percent={percent} />
      {props.steps.map((step, index) => (
        <Step active={props.active >= index} key={index}>
          {step.component}
        </Step>
      ))}
    </div>
  );
};

Steps.propTypes = {
  active: PropTypes.number.isRequired,
};

Steps.defaultProps = {
  active: 0,
};

export default Steps;
