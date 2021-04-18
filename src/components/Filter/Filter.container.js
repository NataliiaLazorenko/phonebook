import { connect } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(contactsActions.filterContacts(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
