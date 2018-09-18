import React from 'react';
import PropTypes from 'prop-types';
import {
  container,
  title,
  getCircleByColor,
  price,
  description,
} from './description.styles';

export const Description = ({ phone }) => (
  <div className={container}>
    <h3 className={title}>{phone.title}</h3>
    {phone.color && <p className={getCircleByColor(phone.color)}>Color </p>}
    <p className={description}>{phone.description}</p>
    <p className={price}>{phone.price}</p>
  </div>
);

Description.propTypes = {
  phone: PropTypes.object.isRequired,
};
