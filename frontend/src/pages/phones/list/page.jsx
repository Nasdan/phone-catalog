import React from 'react';
import PropTypes from 'prop-types';
import { Header, List } from './components';
import { page } from './page.styles';

export const PhoneListPage = props => (
  <div className={page}>
    <Header />
    <List phones={props.phones} onItemClick={props.onItemClick} />
  </div>
);

PhoneListPage.propTypes = {
  phones: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};
