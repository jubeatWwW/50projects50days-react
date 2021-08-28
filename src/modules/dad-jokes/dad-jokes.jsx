import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#686de0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--content-height)',
    overflow: 'hidden',
    margin: 0,
    padding: 20,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)',
    padding: '50px 20px',
    textAlign: 'center',
    maxWidth: '100%',
    width: 800,
  },
  heading: {
    margin: 0,
    opacity: 0.5,
    letterSpacing: 2,
  },
  joke: {
    fontSize: 30,
    letterSpacing: 1,
    lineHeight: '40px',
    margin: '50px auto',
    maxWidth: 600,
  },
  btn: {
    backgroundColor: '#9f68e0',
    color: '#fff',
    border: 0,
    borderRadius: 10,
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)',
    padding: '14px 40px',
    fontSize: 16,
    cursor: 'pointer',
    '&:active': {
      transform: 'scale(0.98)',
    },
    '&:focus': {
      outline: 0,
    },
  },
});

const getJoke = () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return fetch('https://icanhazdadjoke.com', config).then(res => res.json());
};

const useFetchJoke = (defaultValue = '') => {
  const [joke, setJoke] = useState(defaultValue);

  const getNewJoke = useCallback(() => {
    getJoke().then(res => {
      setJoke(res.joke);
    });
  }, []);

  return [joke, getNewJoke];
};

const DadJokes = () => {
  const classes = useStyles();
  const [joke, getNewJoke] = useFetchJoke('// Joke goes here');

  useEffect(() => {
    getNewJoke();
  }, [getNewJoke]);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h3 className={classes.heading}>Don't Laugh Challenge</h3>
        <div className={classes.joke}>{joke}</div>
        <button className={classes.btn} onClick={() => getNewJoke()}>
          Get Another Joke
        </button>
      </div>
    </div>
  );
};

export default DadJokes;
