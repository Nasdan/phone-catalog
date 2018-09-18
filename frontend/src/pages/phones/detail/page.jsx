import React from 'react';
import PropTypes from 'prop-types';
import { page } from './page.styles';
import { Thumbnail, Description } from './components';

export const PhoneDetailPage = ({ phone }) => (
  <div className={page}>
    <Thumbnail imageUrl={phone.imageUrl} />
    <Description phone={phone} />
  </div>
);

PhoneDetailPage.propTypes = {
  phone: PropTypes.object.isRequired,
};
