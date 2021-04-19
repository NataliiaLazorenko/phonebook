import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import styles from './Filter.module.scss';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);

  const dispatch = useDispatch();
  const onChange = useCallback(
    event => dispatch(contactsActions.filterContacts(event.target.value)),
    [dispatch],
  );

  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.filterInput}
      />
    </label>
  );
}
