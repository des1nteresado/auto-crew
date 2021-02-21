import React from 'react';
import { mount } from 'enzyme';
import * as redux from 'react-redux';

import * as CommonContext from 'common/contexts/CommonContext';
import LoginModalContainer from 'modules/Auth/containers/LoginModalContainer';

jest.spyOn(redux, 'useSelector').mockReturnValue({ errors: '' });

const setUp = (props) => mount(<LoginModalContainer {...props} />);

describe('LoginModalContainer', () => {
  let component;
  let useContextSpy;
  let useDispatchSpy;

  beforeEach(() => {
    useDispatchSpy = jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn());
    useContextSpy = jest.spyOn(CommonContext, 'useCommonContext').mockReturnValue({
      isLoginModalShowed: false,
      handleShowLoginModal: jest.fn(),
      handleShowResetPasswordModal: jest.fn(),
      handleShowRegisterModal: jest.fn(),
    });
    component = setUp();
  });

  afterEach(() => {
    useContextSpy.mockRestore();
    useDispatchSpy.mockRestore();
  });

  it('renders LoginModalContainer component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('calls showRegisterModalHandler callback correctly', () => {
    const loginModal = component.find('WithStyles(LoginModal)');
    const { handleShowLoginModal, handleShowRegisterModal } = CommonContext.useCommonContext();

    expect(useContextSpy).toHaveBeenCalled();

    loginModal.props().handleShowRegisterModal();

    expect(handleShowLoginModal).toHaveBeenCalledWith(false);
    expect(handleShowRegisterModal).toHaveBeenCalledWith(true);
  });

  it('calls showResetPasswordModalHandler callback correctly', () => {
    const loginModal = component.find('WithStyles(LoginModal)');
    const { handleShowLoginModal, handleShowResetPasswordModal } = CommonContext.useCommonContext();

    expect(useContextSpy).toHaveBeenCalled();

    loginModal.props().handleShowResetPasswordModal();

    expect(handleShowLoginModal).toHaveBeenCalledWith(false);
    expect(handleShowResetPasswordModal).toHaveBeenCalledWith(true);
  });

  it('calls handleSignIn callback correctly', () => {
    const loginModal = component.find('WithStyles(LoginModal)');
    const dispatch = redux.useDispatch();

    expect(dispatch).not.toHaveBeenCalled();

    loginModal.props().onSubmit({ target: { value: 'test' }, preventDefault: () => {} });

    expect(dispatch).toHaveBeenCalled();
  });

  // @ TODO: improve test

  // it('calls onChangeFields callback correctly', () => {
  //   const loginModal = component.find('WithStyles(LoginModal)');

  //   loginModal.props().onChange({ target: { name: 'name', value: 'test' } });

  //   expect(loginModal.props().onChange).toBeTruthy()
  // });

  it('calls handleErrorClear callback correctly', () => {
    const snack = component.find('WithStyles(Snack)');
    const dispatch = redux.useDispatch();

    expect(dispatch).not.toHaveBeenCalled();

    snack.props().onHandleClose();

    expect(dispatch).toHaveBeenCalled();
  });
});
