import React from 'react';
import { shallow } from 'enzyme';

import LoginModal from 'modules/Auth/LoginModal/components/LoginModal';

const defaultProps = {
  formData: { email: 'testemail@mail.ru', password: 'password' },
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  isEmailValid: true,
  isPasswordValid: true,
  isLoginModalShowed: true,
  handleShowLoginModal: jest.fn(),
  handleShowResetPasswordModal: jest.fn(),
  handleShowRegisterModal: jest.fn(),
};

const setUp = (props) => shallow(<LoginModal {...defaultProps} {...props} />).dive();

describe('LoginModal', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders LoginModal component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('calls submit callback correctly', () => {
    const form = component.find('form');

    form.simulate('submit');

    expect(defaultProps.onSubmit).toHaveBeenCalled();
  });

  it('calls onClose CommonDialog callback correctly', () => {
    const commonDialog = component.find('Memo(WithStyles(CommonDialog))');

    expect(commonDialog.props().isOpen).toBe(defaultProps.isLoginModalShowed);

    commonDialog.props().onClose();

    expect(defaultProps.handleShowLoginModal).toHaveBeenCalledWith(false);
  });

  // @ TODO: check test

  it('calls onClick CloseButton callback correctly', () => {
    const closeButton = component.find('Memo(WithStyles(CommonDialog))').first();

    expect(closeButton.props().isOpen).toBe(defaultProps.isLoginModalShowed);

    closeButton.simulate('click');

    expect(defaultProps.handleShowLoginModal).toHaveBeenCalledWith(false);
  });
});
