import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

const Logo = ({ classes }) => {
  const logoClasses = [styles.logo];

  if (classes) {
    logoClasses.push(classes);
  }

  return <p className={logoClasses.join(' ')}>Phonebook</p>;
};

Logo.propTypes = {
  classes: PropTypes.string,
};

Logo.defaultProps = {
  classes: '',
};

export default Logo;
