import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AppBar from './AppBar';

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
