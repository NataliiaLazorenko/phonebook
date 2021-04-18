import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import HomePage from './HomePage';

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(HomePage);
