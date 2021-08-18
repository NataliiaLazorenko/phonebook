import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Container from '../../components/Container';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';
import styles from './LoginPage.module.scss';

export default function LoginPage() {
  const dispatch = useDispatch();
  const onLogin = useCallback(user => dispatch(authOperations.login(user)), [
    dispatch,
  ]);

  return (
    <section className={styles.loginSection}>
      <Container>
        <AuthForm
          text="Log in"
          redirectLinkText="Don't have an account? Sign up"
          redirectPath={routes.register}
          handleAuthenticate={onLogin}
        />
      </Container>
    </section>
  );
}
