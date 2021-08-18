import PropTypes from 'prop-types';
import styles from './IconButton.module.scss';

const IconButton = ({ children, onClick, classes, ...allyProps }) => {
  const iconButtonClasses = [styles.iconButton];

  if (classes) {
    iconButtonClasses.push(classes);
  }

  return (
    <button
      type="button"
      className={iconButtonClasses.join(' ')}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  children: null,
  onClick: () => null,
  classes: '',
};

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  classes: PropTypes.string,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
