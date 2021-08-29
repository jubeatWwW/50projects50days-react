import React, { useState, useCallback, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';

import TagGroup from './components/tag-group';

const useStyles = makeStyles({
  root: {
    height: 'var(--content-height)',
    overflow: 'hidden',
    backgroundColor: '#2b88f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  container: {
    width: 500,
  },
  heading: {
    color: '#fff',
    margin: '10px 0 20px',
    textAlign: 'center',
  },
  textarea: {
    border: 'none',
    display: 'block',
    width: '100%',
    height: 100,
    fontFamily: 'inherit',
    padding: 10,
    margin: '0 0 20px',
    fontSize: 16,
    '&:focus': {
      outline: 'none',
    },
  },
});

const RandomChoicePicker = () => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [tagText, setTagText] = useState('');

  const tagsRef = useRef(null);

  const onChange = useCallback(value => {
    setText(value);
    if (value) {
      setTagText(value);
    }
  }, []);

  const onKeyDown = useCallback(e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setText('');
      tagsRef.current.random();
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h3 className={classes.heading}>
          Enter all of the choices divided by a comma (','). <br /> Press enter
          when you're done
        </h3>
        <textarea
          placeholder="Enter choices here..."
          className={classes.textarea}
          value={text}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => onKeyDown(e)}
        ></textarea>
        <TagGroup text={tagText} ref={tagsRef} />
      </div>
    </div>
  );
};

export default RandomChoicePicker;
