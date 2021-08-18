import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import HttpsIcon from '@material-ui/icons/Https';
import { withStyles } from '@material-ui/core/styles';
import Button from '../Button';
import styles from './AuthForm.module.scss';

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#2e7d32',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: '#c2185b',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);

export default function AuthForm({
  nameField,
  text,
  redirectLinkText,
  redirectPath,
  handleAuthenticate,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = useCallback(event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      handleAuthenticate({ name, email, password });
      reset();
    },
    [handleAuthenticate, name, email, password],
  );

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setShowPassword(false);
  };

  const handleShowPassword = useCallback(() => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.authForm}
      autoComplete="off"
    >
      <HttpsIcon className={styles.lockIcon} />
      <h2>{text}</h2>
      {nameField && (
        <ValidationTextField
          onChange={handleChange}
          className={styles.inputField}
          autoFocus={nameField ? true : false}
          id="name-input"
          type="name"
          name="name"
          value={name}
          label="Name"
          variant="outlined"
          required
          fullWidth
        />
      )}
      <ValidationTextField
        onChange={handleChange}
        className={styles.inputField}
        autoFocus={nameField ? false : true}
        id="email-input"
        type="email"
        name="email"
        value={email}
        label="Email adress"
        variant="outlined"
        autoComplete="user-name"
        required
        fullWidth
      />

      <ValidationTextField
        onChange={handleChange}
        className={styles.inputField}
        id="password-input"
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={password}
        label="Password"
        variant="outlined"
        autoComplete="password"
        required
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleShowPassword}
                className={styles.passwordIcon}
                aria-label="toggle password visibility"
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        value={text}
        aria-label={text}
        classes={styles.authFormBtn}
      />
      <Link to={redirectPath} className={styles.formLink}>
        {redirectLinkText}
      </Link>
    </form>
  );
}

AuthForm.defaultProps = {
  nameField: false,
};

AuthForm.propTypes = {
  nameField: PropTypes.bool,
  text: PropTypes.string.isRequired,
  redirectLinkText: PropTypes.string.isRequired,
  redirectPath: PropTypes.string.isRequired,
  handleAuthenticate: PropTypes.func.isRequired,
};
