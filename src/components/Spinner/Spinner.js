import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.scss';

const Spinner = () => (
  <div className={styles.spinnerContainer}>
    <Loader type="ThreeDots" color="#1d774d" height={80} width={80} />
  </div>
);

export default Spinner;
