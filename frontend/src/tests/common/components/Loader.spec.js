import React from 'react';
import { mount } from 'enzyme';

import Loader from 'common/components/Loader';

const defaultProps = {
  style: 'style',
};

const setUp = (props) => mount(<Loader {...defaultProps} {...props} />);

describe('Loader', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders Loader component correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
