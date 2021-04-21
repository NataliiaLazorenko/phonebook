import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@material-ui/core';
// import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { ReactComponent as BookIcon } from '../../icons/book.svg';
import styles from './Logo.module.scss';

export default function Logo({ classes, showLogoText }) {
  const logoClasses = [styles.logoWrapper];

  if (classes) {
    logoClasses.push(classes);
  }

  const isBigScreen = useMediaQuery('(min-width:480px)');
  const shouldRenderText = isBigScreen || showLogoText;

  return (
    <div className={logoClasses.join(' ')}>
      <BookIcon className={styles.logoIcon} />

      {shouldRenderText && (
        <p className={styles.logoText}>
          Phone<span className={styles.accent}>book</span>
        </p>
      )}
    </div>
  );
}

Logo.propTypes = {
  classes: PropTypes.string,
  showLogoText: PropTypes.bool,
};

Logo.defaultProps = {
  classes: '',
  showLogoText: true,
};
