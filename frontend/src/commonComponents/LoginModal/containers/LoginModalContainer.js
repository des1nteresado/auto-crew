import React, { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { validateEmail, validatePassword } from 'helpers/validations';
import LoginModal from '../components/LoginModal';
import { CLEAR_ERRORS, LOGIN } from '../actions';
import Snack from '../../SnackBar';

const initialState = { email: '', password: '' };

const LoginModalContainer = ({
  isLoginModalShowed,
  handleShowLoginModal,
  handleShowResetPasswordModal,
  handleShowRegisterModal,
}) => {
  const [formData, setFormData] = useState(initialState);
  const [isLoginError, setIsLoginError] = useState(false);

  const dispatch = useDispatch();

  const { errors } = useSelector((state) => state.user);

  useEffect(() => setIsLoginError(false), []);

  useEffect(() => {
    setFormData(initialState);
  }, [isLoginModalShowed]);

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

      dispatch(LOGIN(formData));
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
      <Snack message={errors} onHandleClose={handleErrorClear} />
    </>
  );
};

LoginModalContainer.propTypes = {
  isLoginModalShowed: PropTypes.bool.isRequired,
  handleShowLoginModal: PropTypes.func.isRequired,
  handleShowResetPasswordModal: PropTypes.func.isRequired,
  handleShowRegisterModal: PropTypes.func.isRequired,
};

export default React.memo(LoginModalContainer);
