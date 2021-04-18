import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import RegisterPage from './RegisterPage';

const mapDispatchToProps = dispatch => ({
  onSignup: user => dispatch(authOperations.signup(user)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);
