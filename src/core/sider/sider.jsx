import React from 'react';
import { Link } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

import { routes } from '../router/router';

const Sider = props => {
  return (
    <MenuList>
      {routes.map(route => (
        <MenuItem component={Link} to={route.path} key={route.path}>
          <ListItemText primary={route.name} />
        </MenuItem>
      ))}
    </MenuList>
  );
};

Sider.propTypes = {};

export default Sider;
