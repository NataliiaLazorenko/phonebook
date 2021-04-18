import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContactsToShow(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId =>
    dispatch(contactsOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
