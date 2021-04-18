import axios from 'axios';
import contactsActions from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch ({ message }) {
    dispatch(contactsActions.fetchContactsError(message));
  }
};

const addContact = ({ name, number }) => async dispatch => {
  const contact = { name, number };
  dispatch(contactsActions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    axios.delete(`/contacts/${contactId}`);

    dispatch(contactsActions.deleteContactSuccess(contactId));
  } catch ({ message }) {
    dispatch(contactsActions.deleteContactError(message));
  }
};

const contactsOperations = { fetchContacts, addContact, deleteContact };

export default contactsOperations;
