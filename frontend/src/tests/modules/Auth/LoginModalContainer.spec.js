import * as React from 'react'; // important moment for easily mocking setState
import { mount } from 'enzyme';
import * as redux from 'react-redux';
import { act } from 'react-dom/test-utils';

import * as CommonContext from 'common/contexts/CommonContext';
import LoginModalContainer from 'modules/Auth/containers/LoginModalContainer';
import { testSelector } from 'modules/Auth/selectors';

jest.spyOn(redux, 'useSelector').mockImplementation((selectorFn) => selectorFn());
jest.mock('modules/Auth/selectors', () => ({
  testSelector: jest.fn().mockReturnValue({ errors: 'test' }),
}));

const setUp = (props) => mount(<LoginModalContainer {...props} />);

describe('LoginModalContainer', () => {
  let component;
  let useContextSpy;
  let useDispatchSpy;
  let useStateSpy;

  const setState = jest.fn();

  beforeEach(() => {
    useStateSpy = jest.spyOn(React, 'useState').mockImplementation((init) => [init, setState]);
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
    jest.clearAllMocks();
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

  it('calls onChangeFields callback correctly', () => {
    const loginModal = component.find('WithStyles(LoginModal)');

    act(() => {
      loginModal.props().onChange({ target: { name: 'name', value: 'test' } });
    });

    expect(setState).toHaveBeenCalled();
  });

  it('calls handleErrorClear callback correctly', () => {
    const snack = component.find('WithStyles(Snack)');
    const dispatch = redux.useDispatch();

    expect(dispatch).not.toHaveBeenCalled();

    snack.props().onHandleClose();

    expect(dispatch).toHaveBeenCalled();
  });
});
