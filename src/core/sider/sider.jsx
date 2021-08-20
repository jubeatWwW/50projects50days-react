import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Expanding Cards',
    path: '/projects/expanding-cards',
  },
];

const Sider = props => {
  return (
    <List component="nav">
      {routes.map(route => (
        <Link to={route.path}>
          <ListItem button>
            <ListItemText primary={route.name} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

Sider.propTypes = {};

export default Sider;
