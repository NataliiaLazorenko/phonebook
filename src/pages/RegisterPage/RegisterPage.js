import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import { authOperations } from '../../redux/auth';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';
import styles from './RegisterPage.module.scss';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const onSignup = useCallback(user => dispatch(authOperations.signup(user)), [
    dispatch,
  ]);

  return (
    <section className={styles.sighUpSection}>
      <Container>
        <AuthForm
          shouldRenderName
          text="Sign up"
          redirectLinkText="Already have an account? Log in"
          redirectPath={routes.login}
          handleAuthenticate={onSignup}
        />
      </Container>
    </section>
  );
}
