import React, { Component } from 'react';
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
import Container from '../../components/Container';
import styles from './LoginPage.module.scss';

// import clsx from 'clsx';
// import { FormControl, OutlinedInput, InputLabel } from '@material-ui/core';

const ColorButton = withStyles(theme => ({
  root: {
    backgroundColor: green[500],
    paddingTop: '15px',
    paddingBottom: '15px',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

class LoginPage extends Component {
  state = {
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

    this.reset();
  };

  reset = () => {
    this.setState({
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
    const { email, password, showPassword } = this.state;

    return (
      <Container>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <HttpsIcon fontSize="large" className={styles.lockIcon} />
          <h1>Log in</h1>
          <TextField
            id="email"
            type="email"
            name="email"
            value={email}
            label="Email adress"
            variant="outlined"
            required={true}
            fullWidth={true}
            autoFocus={true}
            className={styles.formInput}
            onChange={this.handleChange}
          />
          <TextField
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            label="Password"
            variant="outlined"
            required={true}
            fullWidth={true}
            className={styles.formInput}
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
            fullWidth={true}
            size="large"
          >
            Log in
          </ColorButton>
        </form>
      </Container>
    );
  }
}

export default LoginPage;

// <FormControl variant="outlined" fullWidth={true} required={true}>
//   <InputLabel htmlFor="password">Email adress</InputLabel>
//   <OutlinedInput
//     id="email"
//     type="email"
//     name="email"
//     value={email}
//     onChange={this.handleChange}
//     labelWidth={105}
//   />
// </FormControl>
// <FormControl variant="outlined" fullWidth={true} required={true}>
//   <InputLabel htmlFor="password">Password</InputLabel>
//   <OutlinedInput
//     id="password"
//     type={showPassword ? 'text' : 'password'}
//     name="password"
//     value={password}
//     onChange={this.handleChange}
//     endAdornment={
//       <InputAdornment position="end">
//         <IconButton
//           aria-label="toggle password visibility"
//           onClick={this.handleShowPassword}
//           edge="end"
//         >
//           {showPassword ? <Visibility /> : <VisibilityOff />}
//         </IconButton>
//       </InputAdornment>
//     }
//     labelWidth={70}
//   />
// </FormControl>

//  <button type="submit" className="button">
//   Log in
// </button>

// <Button
//           variant="contained"
//           color="primary"
//           type="submit"
//           fullWidth={true}
//           size="large"
//           className="button"
//         >
//           Log in
//         </Button>
