import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import PrivateRoute from 'common/components/PrivateRoute';
import { USER_ROLES } from 'constants/userRoles';

const defaultProps = {
  component: <div>component</div>,
};

const useSelectorMock = jest.spyOn(redux, 'useSelector');
useSelectorMock.mockReturnValue({ user: { role: USER_ROLES.ADMIN } });

const setUp = (props) =>
  shallow(
    <Router>
      <PrivateRoute {...defaultProps} {...props} />
    </Router>
  );

// @TODO: update test
describe('PrivateRoute', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders PrivateRoute component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders required prop correctly', () => {
    const privateRoute = component.find('PrivateRoute');

    expect(privateRoute.props().component).toEqual(defaultProps.component);
  });
});
