import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';

import Nav from './components/nav';
import Banner from './components/banner';
import Content from './components/content';

const useStyles = makeStyles({
  root: {
    fontFamily: '"Open Sans", sans-serif',
    color: '#222',
    height: 'var(--content-height)',
    maxHeight: 'var(--content-height)',
    overflow: 'auto',
    position: 'relative',
  },
  container: {
    paddingBottom: 50,
    position: 'relative',
  },
});

const StickyNavigation = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  const onScroll = useCallback(e => {
    if (e.target.scrollTop > 150) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  return (
    <div className={classes.root} onScroll={onScroll}>
      <div className={classes.container}>
        <Nav active={active} />
        <Banner />
        <Content />
      </div>
    </div>
  );
};

export default StickyNavigation;
