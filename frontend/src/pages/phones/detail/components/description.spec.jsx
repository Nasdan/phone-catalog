import React from 'react';
import { shallow } from 'enzyme';
import { Description } from './description';

describe('pages/phones/detail/components/description specs', () => {
  it('should render as expected when feeding phone', () => {
    // Arrange
    const phone = {
      title: 'test title',
      color: 'test color',
      description: 'test description',
      price: 'test price',
    };

    // Act
    const component = shallow(<Description phone={phone} />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
