import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav className={styles.navigation}>
      <NavLink
        to={routes.home}
        exact
        className={styles.navLink}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      {isLoggedIn && (
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
}
