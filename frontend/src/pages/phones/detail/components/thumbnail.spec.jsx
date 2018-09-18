import React from 'react';
import { shallow } from 'enzyme';
import { Thumbnail } from './thumbnail';

describe('pages/phones/detail/components/thumbnail specs', () => {
  it('should render as expected when feeding imageUrl', () => {
    // Arrange
    const imageUrl = 'test imageUrl';

    // Act
    const component = shallow(<Thumbnail imageUrl={imageUrl} />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
