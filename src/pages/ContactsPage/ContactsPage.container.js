import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactsPage from './ContactsPage';

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getIsLoading(state),
  error: contactsSelectors.getError(state),
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
