import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import UserMenu from './UserMenu';

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authOperations.logout()),
});

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
