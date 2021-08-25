import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  boxContainer: props => ({
    '& > div': {
      transform: props.show ? 'translateX(0)' : 'translateX(400%)',
    },
    '&:nth-of-type(even) > div': {
      transform: props.show ? 'translateX(0)' : 'translateX(-400%)',
    },
  }),
  box: {
    backgroundColor: 'steelblue',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 200,
    margin: 10,
    borderRadius: 10,
    boxShadow: '2px 4px 5px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.4s ease',
  },
  heading: {
    fontSize: 45,
  },
});

const INTERSACTION_RATIO_BOUND = (window.innerHeight / 6) * 5;

const Box = () => {
  const boxRef = useRef(null);
  const [show, setShow] = useState(false);
  const classes = useStyles({ show });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.boundingClientRect.top < INTERSACTION_RATIO_BOUND) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    observer.observe(boxRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={boxRef} className={classes.boxContainer}>
      <div className={classes.box}>
        <h2 className={classes.heading}>Content</h2>
      </div>
    </div>
  );
};

export default Box;
