import React from 'react';
import PropTypes from 'prop-types';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ReactComponent as LogoutIcon } from '../../icons/logout.svg';
import styles from './UserMenu.module.scss';

const UserMenu = ({ email, onLogout }) => (
  <div className={styles.userMenuContainer}>
    <p className={styles.userEmail}>{email}</p>
    <button type="button" onClick={onLogout} className={styles.btn}>
      {/* <ExitToAppIcon /> */}
      <LogoutIcon className={styles.logoutIcon} />
    </button>
  </div>
);

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
