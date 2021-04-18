import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import Spinner from '../../components/Spinner';
import ContactList from '../../components/ContactList';
import styles from './ContactsPage.module.scss';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoading, error, contacts } = this.props;

    return (
      <section className="section">
        <Container>
          <ContactForm />

          <h2>Contacts</h2>
          {contacts.length > 1 && <Filter />}

          {isLoading && <Spinner />}
          {error && <p className={styles.errorMessage}>{error}</p>}
          {!error && contacts.length !== 0 ? (
            <ContactList />
          ) : (
            <p className={styles.errorMessage}>
              You don't have any contacts yet
            </p>
          )}
        </Container>
      </section>
    );
  }
}

ContactsPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  fetchContacts: PropTypes.func.isRequired,
};

ContactsPage.defaultProps = {
  contacts: [],
};

export default ContactsPage;
