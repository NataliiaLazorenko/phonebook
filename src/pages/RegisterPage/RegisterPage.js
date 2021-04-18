import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import AuthForm from '../../components/AuthForm';
import routes from '../../routes';

const RegisterPage = ({ onSignup }) => (
  <section className="section">
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

RegisterPage.propTypes = {
  onSignup: PropTypes.func.isRequired,
};

export default RegisterPage;
