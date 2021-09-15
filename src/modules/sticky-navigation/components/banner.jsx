import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Container from './container';

const useStyles = makeStyles({
  banner: {
    backgroundImage:
      'url("https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    height: '100vh',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    marginBottom: 20,
    zIndex: '-2',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '-1',
    },
  },
  heading: {
    fontSize: 46,
    margin: '-20px 0 20px',
  },
  paragraph: {
    fontSize: 20,
    letterSpacing: 1,
  },
});

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container>
        <h1 className={classes.heading}>Welcome To My Website</h1>
        <p className={classes.paragraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
          consequuntur?
        </p>
      </Container>
    </div>
  );
};

export default Banner;
