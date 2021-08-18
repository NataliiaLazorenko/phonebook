import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import Button from '../Button';
import styles from './UpdateContactForm.module.scss';

export default function UpdateContactForm({ id, name, number, toggleModal }) {
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  const contacts = useSelector(contactsSelectors.getAllContacts);

  const dispatch = useDispatch();

  const handleChange = useCallback(event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setNewName(value);
        break;

      case 'number':
        setNewNumber(value);
        break;

      default:
        throw new Error();
    }
  }, []);

  const validateNewData = () => {
    const isDataChanged = newName !== name || newNumber !== number;

    if (!isDataChanged) {
      toggleModal();
      return false;
    }

    const isData = newName !== '' && newNumber !== '';

    if (!isData) {
      toast.warning('Fill the data');
      return false;
    }

    const isInContacts = contacts
      .filter(contact => contact.id !== id)
      .find(contact => contact.name.toLowerCase() === newName.toLowerCase());

    if (isInContacts) {
      toast.warning(`The contact ${newName} already exists`);
      return false;
    }

    return true;
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isContactValid = validateNewData();

    if (isContactValid) {
      const updatedContact = { id, newName, newNumber };

      dispatch(contactsOperations.updateContact(updatedContact));
      toast.success(`The contact updated successfully `);

      toggleModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label className={styles.formLabel}>
        Name
        <input
          type="text"
          name="name"
          value={newName}
          onChange={handleChange}
          className={styles.formInput}
        />
      </label>
      <label className={styles.formLabel}>
        Phone number
        <input
          type="tel"
          name="number"
          value={newNumber}
          onChange={handleChange}
          className={styles.formInput}
        />
      </label>
      <Button
        type="button"
        value="Cancel"
        onClick={toggleModal}
        aria-label="cancel"
        classes={styles.formBtn}
      />
      <Button
        type="submit"
        value="update"
        classes={styles.formBtn}
        aria-label="update contact"
      />
    </form>
  );
}

UpdateContactForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
