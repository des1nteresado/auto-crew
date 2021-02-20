import React from 'react';
import { mount } from 'enzyme';

import LoginModalContainer from 'modules/Auth/LoginModal/containers/LoginModalContainer';

const defaultProps = {
  isLoginModalShowed: true,
  handleShowLoginModal: jest.fn(),
  handleShowResetPasswordModal: jest.fn(),
  handleShowRegisterModal: jest.fn(),
};

const setUp = (props) => mount(<LoginModalContainer {...defaultProps} {...props} />).dive();

describe('LoginModalContainer', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders LoginModalContainer component correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
