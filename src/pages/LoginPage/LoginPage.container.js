import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import LoginPage from './LoginPage';

const mapDispatchToProps = dispatch => ({
  onLogin: user => dispatch(authOperations.login(user)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
