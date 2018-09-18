import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './history';
import { Routes } from './routes';
import { hot } from 'react-hot-loader';

export const Router = props => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(Router);
