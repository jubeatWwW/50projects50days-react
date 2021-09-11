import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const useStyles = makeStyles({
  movie: {
    width: 300,
    margin: '1rem',
    backgroundColor: '#373b69',
    boxShadow: '0 4px 5px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 3,
  },
  img: {
    width: '100%',
  },
  info: {
    color: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.2rem',
    padding: '0.5rem 1rem 1rem',
    letterSpacing: 0.5,
  },
  heading: {
    marginTop: 0,
  },
  text: props => ({
    backgroundColor: '#22254b',
    padding: '0.25rem 0.5rem',
    borderRadius: 3,
    fontWeight: 'bold',
    color: props.color,
  }),
  overview: props => ({
    backgroundColor: '#fff',
    padding: '2rem',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    maxHeight: '100%',
    transform: props.hovered ? 'translateY(0)' : 'translateY(101%)',
    overflowY: 'auto',
    transition: 'transform 0.3s ease-in',
  }),
});

const MovieCard = ({ movie: { title, posterPath, voteAverage, overview } }) => {
  const color = useMemo(() => {
    if (voteAverage >= 8) {
      return 'lightgreen';
    } else if (voteAverage >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }, [voteAverage]);
  const [hovered, setHovered] = useState(false);
  const classes = useStyles({ color, hovered });

  return (
    <div
      className={classes.movie}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`${IMG_PATH}${posterPath}`}
        alt={title}
        className={classes.info}
        width="100%"
      />
      <div className={classes.info}>
        <h3 className={classes.heading}>{title}</h3>
        <span className={classes.text}>{voteAverage}</span>
      </div>
      <div className={classes.overview}>
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string,
    voteAverage: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: '',
    posterPath: '',
    voteAverage: 0,
    overview: '',
  },
};

export default MovieCard;
