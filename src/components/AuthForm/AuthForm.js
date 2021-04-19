import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  TextField,
  IconButton,
  InputAdornment,
  Button,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import HttpsIcon from '@material-ui/icons/Https';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import styles from './AuthForm.module.scss';

const ColorButton = withStyles(_ => ({
  root: {
    backgroundColor: green[800],
    paddingTop: '15px',
    paddingBottom: '15px',
    marginBottom: '25px',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default function AuthForm({
  shouldRenderName,
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
    <form onSubmit={handleSubmit} className={styles.authForm}>
      <HttpsIcon fontSize="large" className={styles.lockIcon} />
      <h2 className={styles.authFormTitle}>{text}</h2>
      {shouldRenderName && (
        <TextField
          id="name"
          type="name"
          name="name"
          value={name}
          label="Name"
          variant="outlined"
          required
          fullWidth
          autoFocus={shouldRenderName ? true : false}
          className={styles.inputField}
          onChange={handleChange}
        />
      )}
      <TextField
        id="email"
        type="email"
        name="email"
        value={email}
        label="Email adress"
        variant="outlined"
        required
        fullWidth
        autoFocus={shouldRenderName ? false : true}
        className={styles.inputField}
        onChange={handleChange}
      />
      <TextField
        id="password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={password}
        label="Password"
        variant="outlined"
        required
        fullWidth
        className={styles.inputField}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <ColorButton
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        size="large"
      >
        {text}
      </ColorButton>
      <Link to={redirectPath} className={styles.formLink}>
        {redirectLinkText}
      </Link>
    </form>
  );
}
