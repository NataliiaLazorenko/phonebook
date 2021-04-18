import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Footer from './components/Footer';
import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: 'home-page' */),
);

const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: 'register-page' */),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: 'login-page' */),
);

const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: 'contacts-page' */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomePage} />
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.contacts}
              component={RegisterPage}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={LoginPage}
            />
            <PrivateRoute
              path={routes.contacts}
              redirectTo={routes.login}
              component={ContactsPage}
            />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>

        <Footer />
      </>
    );
  }
}

App.propTypes = {
  onGetCurrentUser: PropTypes.func.isRequired,
};

export default App;
