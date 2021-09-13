import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import Content from './components/content';
import ContentLoading from './components/content-loading';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ecf0f1',
    fontFamily: '"Roboto", sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--content-height)',
    overflow: 'hidden',
    margin: 0,
  },
});

const data = {
  title: 'Lorem ipsum dolor sit amet',
  excerpt:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis',
  name: 'John Doe',
  date: 'Oct 08, 2020',
  header:
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
  profile: 'https://randomuser.me/api/portraits/men/45.jpg',
};

const ContentPlaceholder = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className={classes.root}>
      {loading ? <ContentLoading /> : <Content {...data} />}
    </div>
  );
};

export default ContentPlaceholder;
