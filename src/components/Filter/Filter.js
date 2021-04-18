import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
  <label className={styles.filterLabel}>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.filterInput}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
