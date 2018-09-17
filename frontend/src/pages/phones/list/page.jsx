import React from 'react';
import PropTypes from 'prop-types';
import { Header, List } from './components';

export const PhoneListPage = props => (
  <React.Fragment>
    <Header />
    <List phones={props.phones} />
  </React.Fragment>
);

PhoneListPage.propTypes = {
  phones: PropTypes.array.isRequired,
};
