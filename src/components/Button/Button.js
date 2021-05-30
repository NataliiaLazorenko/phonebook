import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ type, onClick, value, classes, ...allyProps }) => {
  const buttonClasses = [styles.btn];

  if (classes) {
    buttonClasses.push(classes);
  }

  return (
    <button
      type={type}
      className={buttonClasses.join(' ')}
      onClick={onClick}
      {...allyProps}
    >
      {value}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  onClick: () => null,
  classes: '',
};

Button.propTypes = {
  type: PropTypes.string,
  onclick: PropTypes.func,
  value: PropTypes.string.isRequired,
  classes: PropTypes.string,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;
