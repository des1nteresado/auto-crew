import React, { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Snack from 'common/components/SnackBar';
import { validateEmail, validatePassword } from 'helpers/validations';
import LoginModal from '../components/LoginModal';
import { CLEAR_ERRORS, SIGN_IN } from '../actions';
import { useCommonContext } from 'common/contexts/CommonContext';
import { userSelector } from '../selectors';

const initialState = { email: '', password: '' };

const LoginModalContainer = () => {
  const {
    isLoginModalShowed,
    handleShowLoginModal,
    handleShowResetPasswordModal,
    handleShowRegisterModal,
  } = useCommonContext();

  const [formData, setFormData] = useState(initialState);
  const [isLoginError, setIsLoginError] = useState(false);

  const dispatch = useDispatch();

  const { message, isSuccess } = useSelector(userSelector);

  useEffect(() => setIsLoginError(false), []);

  useEffect(() => {
    setFormData(initialState);
  }, [isLoginModalShowed]);

  useEffect(() => {
    handleShowLoginModal(false);
  }, [isSuccess]);

  const isEmailValid = useMemo(() => validateEmail(formData.email), [formData.email]);
  const isPasswordValid = useMemo(() => validatePassword(formData.password), [formData.password]);

  const showRegisterModalHandler = useCallback(() => {
    handleShowLoginModal(false);
    handleShowRegisterModal(true);
  }, [handleShowLoginModal, handleShowRegisterModal]);

  const showResetPasswordModalHandler = useCallback(() => {
    handleShowLoginModal(false);
    handleShowResetPasswordModal(true);
  }, [handleShowLoginModal, handleShowResetPasswordModal]);

  const onChangeFields = useCallback(
    (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
      setIsLoginError(false);
    },
    [formData, setFormData, setIsLoginError]
  );

  const handleSignIn = useCallback(
    (event) => {
      event.preventDefault();

      dispatch(SIGN_IN(formData));
    },
    [formData, dispatch]
  );

  const handleErrorClear = useCallback(() => {
    dispatch(CLEAR_ERRORS());
  }, [dispatch]);

  return (
    <>
      <LoginModal
        formData={formData}
        onChange={onChangeFields}
        onSubmit={handleSignIn}
        isEmailValid={isEmailValid}
        isPasswordValid={isPasswordValid}
        isLoginError={isLoginError}
        isLoginModalShowed={isLoginModalShowed}
        handleShowLoginModal={handleShowLoginModal}
        handleShowResetPasswordModal={showResetPasswordModalHandler}
        handleShowRegisterModal={showRegisterModalHandler}
      />
      <Snack message={message} onHandleClose={handleErrorClear} />
    </>
  );
};

export default LoginModalContainer;
