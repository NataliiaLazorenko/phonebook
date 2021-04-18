import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { items, onFormSubmit } = this.props;
    const { name } = this.state;

    if (name === '') {
      return;
    }

    const isInContacts = items.find(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
    } else {
      onFormSubmit(this.state);
    }

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.addContactForm}>
        <h2 className={styles.contactFormTitle}>New contact</h2>
        <label className={styles.contactFormLabel}>
          Name
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

ContactForm.defaultProps = {
  items: [],
};

export default ContactForm;
