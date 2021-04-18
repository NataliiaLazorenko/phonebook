import { connect } from 'react-redux';
import App from './App';
import { authOperations } from './redux/auth';

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
