import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(contactsSelectors.getAllContacts);

  const dispatch = useDispatch();

  const handleChange = useCallback(event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error();
    }
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (name === '') {
        return;
      }

      const isInContacts = items.find(
        item => item.name.toLowerCase() === name.toLowerCase(),
      );

      if (isInContacts) {
        alert(`${name} is already in contacts`);
      } else {
        dispatch(contactsOperations.addContact({ name, number }));
      }

      reset();
    },
    [dispatch, items, name, number],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addContactForm}>
      <h2 className={styles.contactFormTitle}>New contact</h2>
      <label className={styles.contactFormLabel}>
        Name
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={handleChange}
          className={styles.contactFormInput}
        />
      </label>
      <label className={styles.contactFormLabel}>
        Phone Number
        <input
          type="tel"
          placeholder="Enter phone number"
          name="number"
          value={number}
          onChange={handleChange}
          className={styles.contactFormInput}
        />
      </label>
      <button
        type="submit"
        className={`button ${styles.formBtn}`}
        disabled={name === '' || number === '' ? true : false}
      >
        Add contact
      </button>
    </form>
  );
}
