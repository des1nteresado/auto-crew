import React from 'react';

import Breadcrumbs from 'common/components/Breadcrumbs';

const props = {
  children: <div>Test</div>,
};

const setUp = (props) => shallow(<Breadcrumbs {...props} />);

describe('Breadcrumbs', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });

  it('renders Breadcrumbs component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('rendrers Breadcrumbs children prop correclty', () => {
    const div = component.find('div');

    expect(div).toHaveLength(1);
    expect(div.text()).toEqual('Test');
  });
});
