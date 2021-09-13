import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Card, CardHeader, CardContent, CardTitle, CardExcerpt } from './card';

const useStyles = makeStyles({
  skeleton: {
    backgroundImage: `linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 10%,
      #f6f7f8 20%,
      #f6f7f8 100%
    )`,
    backgroundSize: '200% 100%',
    animation: 'skeleton 1s linear infinite',
  },
  text: {
    borderRadius: 50,
    display: 'inline-block',
    margin: 0,
    height: 10,
    width: '100%',
  },
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

const ContentLoading = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader className={classes.skeleton}>&nbsp;</CardHeader>
      <CardContent>
        <CardTitle className={`${classes.skeleton} ${classes.text}`}>
          &nbsp;
        </CardTitle>
        <CardExcerpt>
          &nbsp;
          <span className={`${classes.skeleton} ${classes.text}`}>&nbsp;</span>
          <span className={`${classes.skeleton} ${classes.text}`}>&nbsp;</span>
          <span className={`${classes.skeleton} ${classes.text}`}>&nbsp;</span>
        </CardExcerpt>
        <div className={classes.author}>
          <div className={`${classes.skeleton} ${classes.profile}`}>&nbsp;</div>
          <div className={classes.authorInfo}>
            <strong className={`${classes.skeleton} ${classes.text}`}>
              &nbsp;
            </strong>
            <small
              className={`${classes.skeleton} ${classes.text} ${classes.authorInfoSmall}`}
            >
              &nbsp;
            </small>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentLoading;
