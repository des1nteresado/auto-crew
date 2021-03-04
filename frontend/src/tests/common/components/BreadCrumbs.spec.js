import React from 'react';
import { mount } from 'enzyme';

import Breadcrumbs from 'common/components/Breadcrumbs';

const testProps = {
  children: <div>Test</div>,
};

const setUp = (props) => mount(<Breadcrumbs {...props} />);

describe('Breadcrumbs', () => {
  let component;
  beforeEach(() => {
    component = setUp(testProps);
  });

  it('renders Breadcrumbs component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders Breadcrumbs children prop correclty', () => {
    const div = component.find('div');

    expect(div).toHaveLength(1);
    expect(div.text()).toEqual('Test');
  });
});
