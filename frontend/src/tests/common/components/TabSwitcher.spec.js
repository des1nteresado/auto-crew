import React from 'react';
import { shallow } from 'enzyme';

import TabSwitcher from 'common/components/TabSwitcher';

const defaultProps = {
  tabs: [
    {
      path: 'path1',
      Component: <div>component1</div>,
    },
    {
      path: 'path2',
      Component: <div>component2</div>,
    },
  ],
};

const setUp = (props) => shallow(<TabSwitcher {...defaultProps} {...props} />).dive();

describe('TabSwitcher', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders TabSwitcher component correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
