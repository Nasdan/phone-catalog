import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { shallow } from 'enzyme';
import { Item } from './item';

describe('pages/phones/list/components/item specs', () => {
  it('should render as expected when feeding props', () => {
    // Arrange
    const props = {
      phone: {
        title: 'test title',
        imageUrl: 'test imageUrl',
        price: 'test price',
      },
      className: 'test className',
      onClick: jest.fn(),
    };

    // Act
    const component = shallow(<Item {...props} />);

    // Assert
    expect(component).toMatchSnapshot();
  });

  it('should call to onClick prop with phone property when simulate CardActionArea click', () => {
    // Arrange
    const props = {
      phone: {
        title: 'test title',
        imageUrl: 'test imageUrl',
        price: 'test price',
      },
      className: 'test className',
      onClick: jest.fn(),
    };

    // Act
    const component = shallow(<Item {...props} />);

    const cardActionAreaComponent = component.find(CardActionArea);
    cardActionAreaComponent.simulate('click');

    // Assert
    expect(props.onClick).toHaveBeenCalled();
    expect(props.onClick).toHaveBeenCalledWith(props.phone);
  });
});
