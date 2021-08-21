import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, styled } from '@material-ui/styles';

const Item = styled(({ showNav, index, ...others }) => <li {...others} />)({
  textTransform: 'uppercase',
  color: '#fff',
  margin: '40px 0',
  transform: props => (props.showNav ? 'translateX(0)' : `translateX(-150%)`),
  transition: 'all 0.4s ease-in',
  transitionDelay: props => (props.showNav ? '0.3s' : 0),
  marginLeft: props => (props.showNav && props.index ? props.index * 15 : 0),
});

const useStyles = makeStyles({
  nav: {
    position: 'fixed',
    bottom: 40,
    left: 'var(--sider-width)',
    zIndex: 100,
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 30,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  link: {
    color: '#fafafa',
    textDecoration: 'none',
    transition: 'all 0.5s',
  },
});

const items = [
  {
    icon: 'home',
    name: 'Home',
  },
  {
    icon: 'user-alt',
    name: 'About',
  },
  {
    icon: 'envelope',
    name: 'Contact',
  },
];

const Nav = props => {
  const classes = useStyles(props);
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        {items.map((item, index) => (
          <Item {...props} index={index} key={index}>
            <i className={`fas fa-${item.icon} ${classes.icon}`}></i>
            <a href="?#" className={classes.link}>
              {item.name}
            </a>
          </Item>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  showNav: PropTypes.bool.isRequired,
};

Nav.defaultProps = {
  showNav: false,
};

export default Nav;
