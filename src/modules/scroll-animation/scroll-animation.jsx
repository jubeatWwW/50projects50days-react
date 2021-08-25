import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from './box';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#efedd6',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowX: 'hidden',
    margin: 0,
  },
});

const ScrollAnimation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Scroll to see the animation</h1>
      {[...Array(13)].map((_, index) => (
        <Box key={index} />
      ))}
    </div>
  );
};

export default ScrollAnimation;
