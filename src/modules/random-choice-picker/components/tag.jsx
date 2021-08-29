import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import { styled } from '@material-ui/styles';

const StyledChip = styled(({ active, ...others }) => <Chip {...others} />)({
  backgroundColor: props => (props.active ? '#273c75' : '#f0932b'),
  color: '#fff',
  borderRadius: 50,
  margin: '0 5px 10px 0',
  fontSize: 14,
});

const Tag = props => {
  return <StyledChip {...props} variant="outlined" />;
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

Tag.defaultProps = {
  label: '',
  active: false,
};

export default Tag;
