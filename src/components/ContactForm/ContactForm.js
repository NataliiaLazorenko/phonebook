import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import Button from '../Button';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getAllContacts);

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

      const isData = name !== '' && number !== '';

      if (!isData) {
        return;
      }

      const isInContacts = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      );

      if (isInContacts) {
        toast.warning(`The contact ${name} already exists`);

        return;
      }

      dispatch(contactsOperations.addContact({ name, number }));

      reset();
    },
    [dispatch, contacts, name, number],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <h2>New contact</h2>
      <label className={styles.formLabel}>
        Name *
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={handleChange}
          className={styles.formInput}
          required
        />
      </label>
      <label className={styles.formLabel}>
        Phone number *
        <input
          type="number"
          placeholder="Enter phone number"
          name="number"
          value={number}
          onChange={handleChange}
          className={styles.formInput}
          required
        />
      </label>
      <Button type="submit" value="Add contact" aria-label="add contact" />
    </form>
  );
}
