import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

const Audio = forwardRef(({ sounds }, ref) => {
  const audioRefs = useRef({});

  useImperativeHandle(ref, () => ({
    stopAll() {
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    },
    play(sound) {
      if (audioRefs.current[sound]) {
        audioRefs.current[sound].play();
      }
    },
  }));

  return (
    <>
      {sounds.map(sound => (
        <audio
          key={sound}
          src={`/audio/${sound}.mp3`}
          ref={el => (audioRefs.current[sound] = el)}
        ></audio>
      ))}
    </>
  );
});

Audio.propTypes = {
  sounds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Audio.defaultProps = {
  sounds: [],
};

export default Audio;
