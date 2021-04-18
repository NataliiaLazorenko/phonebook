import React, { Component } from 'react';
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

class AuthForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    showPassword: false,
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { handleAuthenticate } = this.props;
    handleAuthenticate(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
      showPassword: false,
    });
  };

  handleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { name, email, password, showPassword } = this.state;
    const {
      shouldRenderName,
      text,
      redirectLinkText,
      redirectPath,
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={styles.authForm}>
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
            onChange={this.handleChange}
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
          onChange={this.handleChange}
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
          onChange={this.handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleShowPassword}
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
}

export default AuthForm;
