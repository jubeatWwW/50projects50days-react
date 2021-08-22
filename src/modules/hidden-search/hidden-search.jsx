import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundImage: 'linear-gradient(90deg, #7d5fff, #7158e2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    height: 'var(--content-height)',
  },
  search: {
    position: 'relative',
    height: 50,
  },
  input: props => ({
    backgroundColor: '#fff',
    border: 0,
    fontSize: 18,
    padding: 15,
    height: 50,
    width: props.active ? 200 : 50,
    transition: 'width 0.3s ease',
  }),
  btn: props => ({
    backgroundColor: '#fff',
    border: 0,
    cursor: 'pointer',
    fontSize: 24,
    position: 'absolute',
    top: 0,
    left: 0,
    height: 50,
    width: 50,
    transition: 'transform 0.3s ease',
    transform: props.active ? 'translateX(198px)' : '',
  }),
});

const HiddenSearch = () => {
  const [active, setActive] = useState(false);
  const classes = useStyles({ active });
  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <input type="text" className={classes.input} placeholder="Search..." />
        <button
          className={classes.btn}
          onClick={() => setActive(active => !active)}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default HiddenSearch;
