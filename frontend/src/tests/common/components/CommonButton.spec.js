import React from 'react';
import { mount } from 'enzyme';

import CommonButton from 'common/components/CommonButton';

const defaultProps = {
  onClick: jest.fn(),
};

const setUp = (props) => mount(<CommonButton {...defaultProps} {...props} />);

describe('CommonButton', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders CommonButton component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('calls correct handler on button click', () => {
    const button = component.find('button');
    button.simulate('click');
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
