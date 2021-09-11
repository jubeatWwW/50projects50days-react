import React, { useState, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  clock: {
    position: 'relative',
    width: 200,
    height: 200,
  },
  needle: {
    backgroundColor: theme.primaryColor,
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: 65,
    width: 3,
    transformOrigin: 'bottom center',
    transition: 'all 0.5s ease-in',
  },
  point: {
    backgroundColor: '#e74c3c',
    width: 10,
    height: 10,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    '&:after': {
      content: '""',
      backgroundColor: theme.primaryColor,
      width: 5,
      height: 5,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
    },
  },
  hour: {
    transform: 'translate(-50%, -100%) rotate(0deg)',
  },
  minute: {
    transform: 'translate(-50%, -100%) rotate(0deg)',
    height: 100,
  },
  second: {
    transform: 'translate(-50%, -100%) rotate(0deg)',
    height: 100,
    backgroundColor: '#e74c3c',
  },
  time: {
    color: theme.primaryColor,
    fontSize: 60,
  },
  date: {
    color: theme.primaryColor,
    fontSize: 14,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  circle: {
    backgroundColor: theme.primaryColor,
    color: theme.secondaryColor,
    borderRadius: '50%',
    height: 18,
    width: 18,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 18,
    transition: 'all 0.5s ease-in',
    fontSize: 12,
  },
}));

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const getTransform = scale => `translate(-50%, -100%) rotate(${scale}deg)`;

const Clock = () => {
  const classes = useStyles();
  const [now, setNow] = useState(moment());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(moment());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const hourAngle = useMemo(() => scale(now.hours(), 0, 12, 0, 360), [now]);
  const minuteAngle = useMemo(() => scale(now.minutes(), 0, 60, 0, 360), [now]);
  const secondAngle = useMemo(() => scale(now.seconds(), 0, 60, 0, 360), [now]);

  return (
    <>
      <div className={classes.clock}>
        <div
          className={`${classes.needle} ${classes.hour}`}
          style={{ transform: getTransform(hourAngle) }}
        ></div>
        <div
          className={`${classes.needle} ${classes.minute}`}
          style={{ transform: getTransform(minuteAngle) }}
        ></div>
        <div
          className={`${classes.needle} ${classes.second}`}
          style={{ transform: getTransform(secondAngle) }}
        ></div>
        <div className={classes.point}></div>
      </div>
      <div className={classes.time}>{now.format('h:mm A')}</div>
      <div className={classes.date}>
        {now.format('dddd, MMM')}
        <span className={classes.circle}>{now.format('D')}</span>
      </div>
    </>
  );
};

export default Clock;
