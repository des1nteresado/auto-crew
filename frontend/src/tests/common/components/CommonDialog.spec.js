import React from 'react';
import { mount, shallow } from 'enzyme';

import CommonDialog from 'common/components/CommonDialog';

const defaultProps = {
  children: <div>children</div>,
  onClose: () => {},
  style: 'style',
};

const setUp = (props) => mount(<CommonDialog {...defaultProps} {...props} />);

describe('CommonDialog', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders CommonDialog component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders CommonDialog children prop correctly', () => {
    const commonDialog = shallow(<CommonDialog {...defaultProps} />);
    const div = commonDialog.find('div');

    expect(div.text()).toBe('children');
  });
});
