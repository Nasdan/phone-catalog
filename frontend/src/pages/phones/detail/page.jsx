import React from 'react';
import PropTypes from 'prop-types';
import {
  page,
  descriptionContainer,
  title,
  getCircleByColor,
  price,
} from './page.styles';
import { imageContainer } from '../../../common/styles/image';

export const PhoneDetailPage = ({ phone }) => (
  <div className={page}>
    <div className={imageContainer}>
      <img src={phone.imageUrl} />
    </div>
    <div className={descriptionContainer}>
      <h3 className={title}>{phone.title}</h3>
      {phone.color && <p className={getCircleByColor(phone.color)}>Color </p>}
      <p>{phone.description}</p>
      <p className={price}>{phone.price}</p>
    </div>
  </div>
);

PhoneDetailPage.propTypes = {
  phone: PropTypes.object.isRequired,
};
