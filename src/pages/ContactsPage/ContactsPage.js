import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import Spinner from '../../components/Spinner';
import ContactList from '../../components/ContactList';
import styles from './ContactsPage.module.scss';

export default function ContactsPage() {
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getError);
  const contacts = useSelector(contactsSelectors.getAllContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <section className={styles.newContactSection}>
        <Container>
          <ContactForm />
        </Container>
      </section>

      <section className={styles.contactsSection}>
        <Container>
          <h2>Contacts</h2>
          {contacts.length > 1 && <Filter />}

          {isLoading && <Spinner />}
          {error && <p className={styles.errorMessage}>{error}</p>}

          {!error && !isLoading && contacts.length === 0 && (
            <p className={styles.warningMessage}>
              You don't have any contacts yet
            </p>
          )}

          {contacts.length !== 0 && <ContactList />}
        </Container>
      </section>
    </>
  );
}
