import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { imageContainer } from '../../../../common/styles/image';

export const Thumbnail = ({ imageUrl }) => (
  <Card>
    <CardContent>
      <div className={imageContainer}>
        <img src={imageUrl} />
      </div>
    </CardContent>
  </Card>
);

Thumbnail.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
