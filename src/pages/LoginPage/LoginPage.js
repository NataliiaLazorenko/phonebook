import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Container from '../../components/Container';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';

export default function LoginPage() {
  const dispatch = useDispatch();
  const onLogin = useCallback(user => dispatch(authOperations.login(user)), [
    dispatch,
  ]);

  return (
    <section className="section">
      <Container>
        <AuthForm
          shouldRenderName={false}
          text="Log in"
          redirectLinkText="Don't have an account? Sign up"
          redirectPath={routes.register}
          handleAuthenticate={onLogin}
        />
      </Container>
    </section>
  );
}
