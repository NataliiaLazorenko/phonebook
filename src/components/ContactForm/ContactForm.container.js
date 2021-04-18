import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  items: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onFormSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
