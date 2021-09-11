import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  slide: props => ({
    opacity: props.active ? 1 : 0,
    height: '100vh',
    width: '100vw',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'absolute',
    top: '-15vh',
    left: '-15vw',
    transition: '0.4s ease',
    zIndex: 1,
  }),
});

const Slide = ({ imageUrl, active }) => {
  const classes = useStyles({ active });

  return (
    <div className={classes.slide} style={{ backgroundImage: imageUrl }}></div>
  );
};

Slide.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

Slide.defaultProps = {
  imageUrl: '',
  active: false,
};

export default Slide;
