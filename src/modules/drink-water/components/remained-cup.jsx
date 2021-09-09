import React, { useContext, useMemo } from 'react';
import { makeStyles } from '@material-ui/styles';

import Context from '../context';

import Cup from './cup';

const useStyles = makeStyles({
  remained: props => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
    transition: '0.3s ease',
    visibility: props.filled ? 'hidden' : 'visible',
    height: props.filled ? 0 : 'auto',
  }),
  span: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  small: {
    fontSize: 12,
  },
  percentage: props => ({
    backgroundColor: '#6ab3f8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    transition: '0.3s ease',
    height: ((props.active + 1) / 8) * 330,
    visibility: props.active >= 0 ? 'visible' : 'hidden',
  }),
});

const RemainedCup = props => {
  const { active } = useContext(Context);
  const filled = useMemo(() => active === 7, [active]);
  const classes = useStyles({ active, filled });

  return (
    <Cup>
      <div className={classes.remained}>
        <span className={classes.span}>
          {`${2 - (250 * (active + 1)) / 1000}L`}
        </span>
        <small className={classes.small}>Remained</small>
      </div>
      <div className={classes.percentage}>{`${((active + 1) / 8) * 100}%`}</div>
    </Cup>
  );
};

RemainedCup.propTypes = {};

RemainedCup.defaultProps = {};

export default RemainedCup;
