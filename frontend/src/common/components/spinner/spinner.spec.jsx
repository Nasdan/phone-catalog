import React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from './spinner';

describe('common/components/spinner specs', () => {
  it('should render InnerSpinner component with trackedPromiseInProgress equals false', () => {
    // Arrange

    // Act
    const component = shallow(<Spinner />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
