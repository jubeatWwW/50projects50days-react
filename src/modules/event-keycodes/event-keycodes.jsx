import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';

import Key from './components/key';
import KeyField from './components/key-field';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#e1e1e1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 'var(--content-height)',
    overflow: 'hidden',
    margin: 0,
  },
  key: {
    border: '1px solid #999',
    backgroundColor: '#eee',
    boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    flexDirection: 'column',
    margin: 10,
    minWidth: 150,
    position: 'relative',
  },
});

const EventKeycodes = () => {
  const classes = useStyles();
  const [event, setEvent] = useState(null);

  const onKeyDown = useCallback(e => {
    setEvent(e);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div className={classes.root} onKeyDown={onKeyDown}>
      <div id="insert">
        {event ? (
          <>
            <KeyField
              label="event.key"
              content={event.key === ' ' ? 'Space' : event.key}
            />
            <KeyField label="event.keyCode" content={event.keyCode} />
            <KeyField label="event.code" content={event.code} />
          </>
        ) : (
          <Key>Press any key to get the keyCode</Key>
        )}
      </div>
    </div>
  );
};

export default EventKeycodes;
