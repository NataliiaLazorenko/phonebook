import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.scss';

export default function ContactList() {
  const contactsToShow = useSelector(contactsSelectors.getContactsToShow);

  const dispatch = useDispatch();

  const onDeleteContact = useCallback(
    contactId => dispatch(contactsOperations.deleteContact(contactId)),
    [dispatch],
  );

  return (
    <>
      {contactsToShow.length === 0 ? (
        <p className={styles.warningMessage}>There are no contacts that fit</p>
      ) : (
        <ul className={styles.contactsList}>
          {contactsToShow.map(({ id, name, number }) => (
            <li className={styles.listItem} key={id}>
              <ContactListItem
                id={id}
                name={name}
                number={number}
                onDeleteContact={() => onDeleteContact(id)}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
