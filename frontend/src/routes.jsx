import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { App } from './app';
import { PhoneRoutes } from './pages/phones';
import { routes } from './common/constants/routes';

export const Routes = props => (
  <App>
    <Switch>
      <Route
        exact={true}
        path={routes.default}
        render={() => <Redirect to={routes.phones.default} />}
      />
      <PhoneRoutes />
    </Switch>
  </App>
);
