import React from 'react';
import { shallow, mount } from 'enzyme';

import CommonColorPicker from 'common/components/CommonColorPicker';

const defaultProps = {
  value: 'value',
  selectedValue: 'value',
};

const setUp = (props) => shallow(<CommonColorPicker {...defaultProps} {...props} />);

describe('CommonColorPicker', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders CommonColorPicker component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('sets checked prop to true when selectedValue equals value', () => {
    const colorPicker = mount(<CommonColorPicker {...defaultProps} />);
    const input = colorPicker.find('input');

    expect(input.props().checked).toBeTruthy();
  });
});
