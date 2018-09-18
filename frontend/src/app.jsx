import React from 'react';
import { Spinner } from './common/components/spinner';

export const App = props => (
  <React.Fragment>
    {props.children}
    <Spinner />
  </React.Fragment>
);
