import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.scss';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getContactsToShow);

  const dispatch = useDispatch();

  const onDeleteContact = useCallback(
    contactId => dispatch(contactsOperations.deleteContact(contactId)),
    [dispatch],
  );

  return (
    <ul className={styles.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.listItem} key={id}>
          <ContactListItem
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}
