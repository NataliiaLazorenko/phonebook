import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import routes from '../../routes';
import styles from './HomePage.module.scss';

const HomePage = ({ isAuthenticated }) => (
  <section className={styles.hero}>
    <Container>
      <h1 className={styles.title}>Welcome to Phonebook</h1>
      {!isAuthenticated && (
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

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default HomePage;
