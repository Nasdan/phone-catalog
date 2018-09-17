import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './item';
import { list, item } from './list.styles';

export const List = props => (
  <ul className={list}>
    {props.phones.map(phone => (
      <Item key={phone.id} className={item} phone={phone} />
    ))}
  </ul>
);

List.propTypes = {
  phones: PropTypes.array.isRequired,
};
