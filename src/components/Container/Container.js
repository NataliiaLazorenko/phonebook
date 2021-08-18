import PropTypes from 'prop-types';
import styles from './Container.module.scss';

export default function Container({ children, classes }) {
  const containerClasses = [styles.container];

  if (classes) {
    containerClasses.push(classes);
  }

  return <div className={containerClasses.join(' ')}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

Container.defaultProps = {
  classes: '',
};
