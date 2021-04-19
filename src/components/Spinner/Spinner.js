import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export default function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <Loader type="ThreeDots" color="#1d774d" height={80} width={80} />
    </div>
  );
}
