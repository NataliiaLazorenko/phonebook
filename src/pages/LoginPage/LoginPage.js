import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';

const LoginPage = ({ onLogin }) => (
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

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
