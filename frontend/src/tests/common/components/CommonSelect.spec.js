import React from 'react';
import { shallow } from 'enzyme';

import CommonSelect from 'common/components/CommonSelect';

const defaultProps = {
  value: 'value',
  onChange: () => {},
  items: ['ITEM1', 'ITEM2'],
};

jest.mock('uuid', () => ({
  v1: () => 'test-id',
}));

const setUp = (props) => shallow(<CommonSelect {...defaultProps} {...props} />);

describe('CommonSelect', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders CommonSelect component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders items prop correctly', () => {
    const menuItems = component.find('WithStyles(ForwardRef(MenuItem))');

    expect(menuItems).toHaveLength(defaultProps.items.length);

    menuItems.forEach((menuItem) => {
      expect(defaultProps.items.some((item) => item === menuItem.text())).toBeTruthy();
    });
  });
});
