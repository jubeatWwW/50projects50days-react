import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';

import Slide from './components/slide';

const useStyles = makeStyles({
  root: {
    fontFamily: '"Roboto", sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--content-height)',
    overflow: 'hidden',
    margin: 0,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    transition: '0.4s',
    position: 'relative',
    zIndex: 0,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: '-1',
    },
  },
  container: {
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    height: '70%',
    width: '70%',
    position: 'relative',
    overflow: 'hidden',
  },
  arrow: {
    position: 'absolute',
    backgroundColor: 'transparent',
    color: '#fff',
    padding: 20,
    fontSize: 30,
    border: '2px solid orange',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  },
  leftArrow: {
    left: 'calc(15% - 65px)',
  },
  rightArrow: {
    right: 'calc(15% - 65px)',
  },
});

const makeImageUrl = ({ id, width }) =>
  `url('https://images.unsplash.com/${id}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${width}&q=80)`;

const slideImages = [
  {
    id: 'photo-1549880338-65ddcdfd017b',
    width: 2100,
  },
  {
    id: 'photo-1511593358241-7eea1f3c84e5',
    width: 1934,
  },
  {
    id: 'photo-1495467033336-2effd8753d51',
    width: 2100,
  },
  {
    id: 'photo-1522735338363-cc7313be0ae0',
    width: 2689,
  },
  {
    id: 'photo-1559087867-ce4c91325525',
    width: 2100,
  },
];

const BackgroundSlider = () => {
  const classes = useStyles();

  const [active, setActive] = useState(0);

  const onClick = useCallback(
    (inc = 1) => {
      if (inc >= 0) {
        setActive(active => (active + inc) % slideImages.length);
      } else {
        if (active + inc < 0) {
          setActive(slideImages.length - 1);
        } else {
          setActive(active => active + inc);
        }
      }
    },
    [active]
  );

  return (
    <div
      className={classes.root}
      style={{ backgroundImage: makeImageUrl({ ...slideImages[active] }) }}
    >
      <div className={classes.container}>
        {slideImages.map((image, index) => (
          <Slide
            key={image.id}
            imageUrl={makeImageUrl({ ...image })}
            active={active === index}
          />
        ))}
      </div>
      <button
        className={`${classes.arrow} ${classes.leftArrow}`}
        onClick={() => onClick(1)}
      >
        <i className="fas fa-arrow-left"></i>
      </button>

      <button
        className={`${classes.arrow} ${classes.rightArrow}`}
        onClick={() => onClick(-1)}
      >
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default BackgroundSlider;
