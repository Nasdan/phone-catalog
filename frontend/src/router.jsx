import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Routes } from './routes';
import { hot } from 'react-hot-loader';

export const Router = props => (
  <HashRouter>
    <Routes />
  </HashRouter>
);

export default hot(module)(Router);
