import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ReactComponent as LogoutIcon } from '../../icons/logout.svg';
import styles from './UserMenu.module.scss';

export default function UserMenu() {
  const email = useSelector(authSelectors.getUserEmail);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(authOperations.logout()), [
    dispatch,
  ]);

  return (
    <div className={styles.userMenuContainer}>
      <p className={styles.userEmail}>{email}</p>
      <button type="button" onClick={onLogout} className={styles.btn}>
        {/* <ExitToAppIcon /> */}
        <LogoutIcon className={styles.logoutIcon} />
      </button>
    </div>
  );
}
