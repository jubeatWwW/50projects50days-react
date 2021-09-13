import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { Card, CardHeader, CardContent, CardTitle, CardExcerpt } from './card';

const useStyles = makeStyles({
  author: {
    display: 'flex',
  },
  profile: {
    borderRadius: '50%',
    overflow: 'hidden',
    height: 40,
    width: 40,
  },
  authorInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
    width: 100,
  },
  authorInfoSmall: {
    color: '#aaa',
    marginTop: 5,
  },
});

const Content = props => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader>
        <img src={props.header} alt="" />
      </CardHeader>
      <CardContent>
        <CardTitle>{props.title}</CardTitle>
        <CardExcerpt>{props.excerpt}</CardExcerpt>
        <div className={classes.author}>
          <div>
            <img className={classes.profile} src={props.profile} alt="" />
          </div>
          <div className={classes.authorInfo}>
            <strong>{props.name}</strong>
            <small className={classes.authorInfoSmall}>{props.date}</small>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  header: PropTypes.string,
  profile: PropTypes.string,
};

export default Content;
