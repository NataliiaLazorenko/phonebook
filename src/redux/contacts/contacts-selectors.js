import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getIsLoading = state => state.contacts.isLoading;
const getError = state => state.contacts.error;

const getContactsToShow = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelectors = {
  getAllContacts,
  getFilter,
  getIsLoading,
  getError,
  getContactsToShow,
};

export default contactsSelectors;
