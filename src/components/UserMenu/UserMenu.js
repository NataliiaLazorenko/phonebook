import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import IconButton from '../IconButton';
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
      <IconButton onClick={onLogout} classes={styles.btn} aria-label="logout">
        <LogoutIcon className={styles.logoutIcon} />
      </IconButton>
    </div>
  );
}
