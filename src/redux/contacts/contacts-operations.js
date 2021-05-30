import axios from 'axios';
import contactsActions from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
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
    await axios.delete(`/contacts/${contactId}`);

    dispatch(contactsActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error.message));
  }
};

const updateContact = ({
  id,
  newName: name,
  newNumber: number,
}) => async dispatch => {
  const updatedContact = { name, number };

  dispatch(contactsActions.updateContactRequest());

  try {
    const { data } = await axios.patch(`/contacts/${id}`, updatedContact);

    dispatch(contactsActions.updateContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.updateContactError(error.message));
  }
};

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
};

export default contactsOperations;
