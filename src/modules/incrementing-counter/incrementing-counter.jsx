import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Counter from './components/counter';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#8e44ad',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--content-height)',
    overflow: 'hidden',
    margin: 0,
    '@media (max-width: 580px)': {
      flexDirection: 'column',
    },
  },
});

const counters = [
  {
    label: 'Twitter Followers',
    icon: 'fab fa-twitter fa-3x',
    target: 12000,
  },
  {
    label: 'YouTube Subscribers',
    icon: 'fab fa-youtube fa-3x',
    target: 5000,
  },
  {
    label: 'Facebook Fans',
    icon: 'fab fa-facebook fa-3x',
    target: 7500,
  },
];

const IncrementingCounter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {counters.map(counter => (
        <Counter {...counter} key={counter.label} />
      ))}
    </div>
  );
};

export default IncrementingCounter;
