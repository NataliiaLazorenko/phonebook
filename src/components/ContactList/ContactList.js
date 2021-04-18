import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.scss';

const ContactList = ({ contacts, onDeleteContact }) => (
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
