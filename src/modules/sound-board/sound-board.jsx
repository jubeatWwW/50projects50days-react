import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import SoundButton from './components/sound-button';
import Audio from './components/audio';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgb(161, 100, 223)',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 'var(--content-height)',
    overflow: 'hidden',
    margin: 0,
  },
});

const SoundBoard = () => {
  const classes = useStyles();
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
  const audioRef = useRef(null);

  return (
    <div className={classes.root}>
      <Audio sounds={sounds} ref={audioRef} />
      {sounds.map(sound => (
        <SoundButton
          key={sound}
          label={sound}
          onClick={sound => {
            audioRef.current.stopAll();
            audioRef.current.play(sound);
          }}
        />
      ))}
    </div>
  );
};

export default SoundBoard;
