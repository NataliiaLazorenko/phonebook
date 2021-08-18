import { useSelector } from 'react-redux';
import Container from '../Container';
import Logo from '../Logo';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';
import styles from './AppBar.module.scss';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header>
      <Container classes={styles.headerContainer}>
        <Logo showLogoText={false} />
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </header>
  );
}
