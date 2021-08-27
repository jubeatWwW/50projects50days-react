import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--content-height)',
    overflow: 'hidden',
    margin: 0,
  },
  bg: props => ({
    background:
      "url('https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80') no-repeat center center/cover",
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    filter: `blur(${props.blur}px)`,
  }),
  loadingText: props => ({
    fontSize: 50,
    color: '#fff',
    opacity: props.opacity,
  }),
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const useLoads = (defaultLoad = 0) => {
  const [load, setLoad] = useState(defaultLoad);
  const [opacity, setOpacity] = useState(1);
  const [blur, setBlur] = useState(0);

  return [
    {
      load,
      opacity,
      blur,
    },
    load => {
      setLoad(load);
      setOpacity(scale(load, 0, 100, 1, 0));
      setBlur(scale(load, 0, 100, 30, 0));
    },
  ];
};

const BlurryLoading = () => {
  const [loads, setLoads] = useLoads();

  useEffect(() => {
    const id = setInterval(() => {
      if (loads.load > 99) {
        clearInterval(id);
        return;
      }
      setLoads(loads.load + 1);
    }, 30);

    return () => {
      clearInterval(id);
    };
  });

  const classes = useStyles(loads);

  return (
    <div className={classes.root}>
      <section className={classes.bg}></section>
      <div className={classes.loadingText}>{loads.load}%</div>
    </div>
  );
};

export default BlurryLoading;
