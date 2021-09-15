import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import Container from './container';

const useStyles = makeStyles({
  nav: props => ({
    position: 'sticky',
    backgroundColor: props.active ? '#fff' : '#222',
    top: 0,
    left: 0,
    right: 0,
    transition: 'all 0.3s ease-in-out',
    boxShadow: props.active ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none',
  }),
  container: props => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: props.active ? '10px 0' : '20px 0',
    transition: 'all 0.3s ease-in-out',
  }),
  list: {
    display: 'flex',
    listStyleType: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: props => ({
    color: props.active ? '#000' : '#fff',
    textDecoration: 'none',
    padding: '7px 15px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      color: '#c0392b',
      fontWeight: 'bold',
    },
  }),
});

const links = ['Home', 'About', 'Services', 'Contact'];

const Nav = ({ active }) => {
  const classes = useStyles({ active });

  return (
    <nav className={classes.nav}>
      <Container className={classes.container}>
        <h1>
          <a href="#?" className={classes.link}>
            My Website
          </a>
        </h1>
        <ul className={classes.list}>
          {links.map(link => (
            <li key={link}>
              <a href="#?" className={classes.link}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

Nav.propTypes = {
  active: PropTypes.bool.isRequired,
};

Nav.defaultProps = {
  active: false,
};

export default Nav;
