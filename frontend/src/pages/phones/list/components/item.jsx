import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { item, card, cardContent, image, title, price } from './item.styles';

export const Item = props => (
  <li className={cx(item, props.className)}>
    <Card className={card}>
      <CardContent className={cardContent}>
        <div className={image}>
          <img src={props.phone.imageUrl} />
        </div>
        <Typography className={title}>{props.phone.title}</Typography>
        <Typography className={price}>
          <h2>{props.phone.price}</h2>
        </Typography>
      </CardContent>
    </Card>
  </li>
);

Item.propTypes = {
  phone: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};
