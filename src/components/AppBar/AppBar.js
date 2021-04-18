import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import Logo from '../Logo';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import styles from './AppBar.module.scss';

const AppBar = ({ isAuthenticated }) => (
  <header>
    <Container classes={styles.headerContainer}>
      <Logo />
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Container>
  </header>
);

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default AppBar;
