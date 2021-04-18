import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AuthNav.module.scss';

const AuthNav = () => (
  <ul className={styles.AuthNavList}>
    <li className={styles.listItem}>
      <NavLink
        to={routes.login}
        className={styles.listItemLink}
        activeClassName={styles.activeLink}
      >
        Log in
      </NavLink>
    </li>
    <li className={styles.listItem}>
      <NavLink
        to={routes.register}
        className={styles.listItemLink}
        activeClassName={styles.activeLink}
      >
        Sign up
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
