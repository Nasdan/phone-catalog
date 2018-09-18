import React from 'react';
import { shallow } from 'enzyme';
import { Item } from './item';
import { List } from './list';

describe('pages/phones/list/components/list specs', () => {
  it('should render as expected when feeding props', () => {
    // Arrange
    const props = {
      phones: [
        {
          id: 1,
          title: 'test title',
          imageUrl: 'test imageUrl',
          price: 'test price',
        },
      ],
      onItemClick: jest.fn(),
    };

    // Act
    const component = shallow(<List {...props} />);

    // Assert
    expect(component).toMatchSnapshot();
  });

  it('should call to onClick prop when simulate Item click', () => {
    // Arrange
    const props = {
      phones: [
        {
          id: 1,
          title: 'test title',
          imageUrl: 'test imageUrl',
          price: 'test price',
        },
      ],
      onItemClick: jest.fn(),
    };

    // Act
    const component = shallow(<List {...props} />);

    const itemComponent = component.find(Item);
    itemComponent.simulate('click');

    // Assert
    expect(props.onItemClick).toHaveBeenCalled();
  });
});
