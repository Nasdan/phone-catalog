import React from 'react';
import { Route } from 'react-router-dom';
import { PhoneListContainer } from './list';
import { PhoneDetailContainer } from './detail';
import { routes } from '../../common/constants/routes';

export const PhoneRoutes = props => (
  <React.Fragment>
    <Route
      exact={true}
      path={routes.phones.list}
      component={PhoneListContainer}
    />
    <Route path={routes.phones.detail} component={PhoneDetailContainer} />
  </React.Fragment>
);
