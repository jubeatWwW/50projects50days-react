import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  formControl: {
    position: 'relative',
    margin: '20px 0 40px',
    width: 300,
  },
  input: {
    backgroundColor: 'transparent',
    border: 0,
    borderBottom: '2px #fff solid',
    display: 'block',
    width: '100%',
    padding: '15px 0',
    fontSize: 18,
    color: '#fff',
    '&:focus, &:valid': {
      outline: 0,
      borderBottomColor: 'lightblue',
      '& + label span': {
        color: 'lightblue',
        transform: 'translateY(-30px)',
      },
    },
  },
  label: {
    position: 'absolute',
    top: 15,
    left: 0,
    pointerEvents: 'none',
  },
  span: {
    display: 'inline-block',
    fontSize: 18,
    minWidth: 5,
    transition: '0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
});

const FormItem = props => {
  const classes = useStyles();

  return (
    <div className={classes.formControl}>
      <input className={classes.input} type={props.type} required />
      <label className={classes.label}>
        {[...props.label].map((c, index) => (
          <span
            className={classes.span}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {c}
          </span>
        ))}
      </label>
    </div>
  );
};

FormItem.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

FormItem.defaultProps = {
  label: '',
  type: 'text',
};

export default FormItem;
