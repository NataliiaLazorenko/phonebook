import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.scss';

const Navigation = ({ isAuthenticated }) => (
  <nav className={styles.navigation}>
    <NavLink
      to={routes.home}
      exact
      className={styles.navLink}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to={routes.contacts}
        className={styles.navLink}
        activeClassName={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Navigation;
