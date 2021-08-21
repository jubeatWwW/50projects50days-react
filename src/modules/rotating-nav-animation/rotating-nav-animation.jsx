import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import Circle from './components/circle';
import Content from './components/content';
import Nav from './components/nav';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'hidden',
    position: 'relative',
    backgroundColor: '#333',
    color: '#222',
  },
  container: props => ({
    width: '100%',
    minHeight: 'var(--content-height)',
    backgroundColor: '#fafafa',
    transformOrigin: 'top left',
    transition: 'transform 0.5s linear',
    padding: 50,
    transform: props.showNav ? 'rotate(-20deg)' : '',
  }),
});

const RotatingNavAnimation = () => {
  const [showNav, setShowNav] = useState(false);
  const classes = useStyles({ showNav });
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Circle showNav={showNav} setShowNav={setShowNav} />
        <Content />
      </div>
      <Nav showNav={showNav} />
    </div>
  );
};

export default RotatingNavAnimation;
