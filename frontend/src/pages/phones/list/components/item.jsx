import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import {
  item,
  card,
  cardActionArea,
  cardContent,
  title,
  price,
} from './item.styles';
import { imageContainer } from '../../../../common/styles/image';

export const Item = props => (
  <li className={cx(item, props.className)}>
    <Card className={card}>
      <CardActionArea className={cardActionArea} onClick={handleClick(props)}>
        <CardContent className={cardContent}>
          <div className={imageContainer}>
            <img src={props.phone.imageUrl} />
          </div>
          <Typography className={title}>{props.phone.title}</Typography>
          <h2 className={price}>{props.phone.price}</h2>
        </CardContent>
      </CardActionArea>
    </Card>
  </li>
);

const handleClick = props => () => {
  props.onClick(props.phone);
};

Item.propTypes = {
  phone: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
