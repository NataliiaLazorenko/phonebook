import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../components/IconButton';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import Modal from '../../components/Modal';
import UpdateContactForm from '../../components/UpdateContactForm';
import styles from './ContactListItem.module.scss';

export default function ContactListItem({ id, name, number, onDeleteContact }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <>
      <p>
        <span className={styles.contactName}>{name}: </span>
        {number}
      </p>

      <ul className={styles.linksList}>
        <li className={styles.linksListItem}>
          <IconButton
            onClick={toggleModal}
            classes={styles.editContactBtn}
            aria-label="edit contact"
          >
            <EditIcon className={styles.contactsIcon} />
          </IconButton>
        </li>
        <li>
          <IconButton
            onClick={onDeleteContact}
            classes={styles.deleteContactBtn}
            aria-label="delete contact"
          >
            <DeleteIcon className={styles.contactsIcon} />
          </IconButton>
        </li>
      </ul>

      {showModal && (
        <Modal onClose={toggleModal}>
          <UpdateContactForm
            id={id}
            name={name}
            number={number}
            toggleModal={toggleModal}
          />
        </Modal>
      )}
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
