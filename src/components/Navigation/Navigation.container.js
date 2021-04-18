import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from './Navigation';

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
