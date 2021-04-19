import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Якщо маршрут обмежений і користувач залогінений, рендерить Redirect на /todos
 * - У протилежному випадку, рендерить компонент
 */
export default function PublicRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
