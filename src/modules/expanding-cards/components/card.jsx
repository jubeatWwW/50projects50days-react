import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  panel: props => ({
    backgroundImage: `url(${props.imageUrlBase}${props.imageId}?${props.imageUrlQueries})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    borderRadius: '50px',
    color: '#fff',
    cursor: 'pointer',
    flex: props.active ? '5' : '0.5',
    margin: '10px',
    position: 'relative',
    transition: 'all .7s ease-in',
  }),
  title: props => ({
    fontSize: 24,
    position: 'absolute',
    bottom: 20,
    left: 20,
    margin: 0,
    transition: 'opacity .3s ease-in .4s',
    opacity: props.active ? 1 : 0,
  }),
});

const Card = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.panel} onClick={props.onClick}>
      <h3 className={classes.title}>{props.title}</h3>
    </div>
  );
};

Card.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  imageUrlBase: PropTypes.string,
  imageUrlQueries: PropTypes.string,
};

Card.defaultProps = {
  active: false,
  imageUrlBase: 'https://images.unsplash.com/',
  imageUrlQueries:
    'ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
};

export default Card;
