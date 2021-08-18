import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import Container from '../../components/Container';
import routes from '../../routes';
import styles from './HomePage.module.scss';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.title}>Welcome to Phonebook</h1>
        {!isLoggedIn && (
          <div className={styles.textContainer}>
            <p className={styles.text}>To use it, please</p>
            <Link to={routes.login} className={styles.link}>
              log in
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
