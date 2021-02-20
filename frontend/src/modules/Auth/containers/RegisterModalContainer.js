import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Snack from 'common/components/SnackBar';
import { validateEmail } from 'helpers/validations';
import { validatePassword, validateConfirmPassword } from '../helpers/validations';
import RegisterModal from '../components/RegisterModal';
import { CLEAR_REGISTER_MESSAGE, SIGN_UP } from '../actions';
import { useCommonContext } from 'common/contexts/CommonContext';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterModalContainer = () => {
  const {
    isRegisterModalShowed,
    handleShowLoginModal,
    handleShowRegisterModal,
  } = useCommonContext();

  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  const { success, message } = useSelector((state) => state.user);

  useEffect(() => {
    setFormData(initialState);
  }, [isRegisterModalShowed]);

  const isEmailValid = useMemo(() => validateEmail(formData.email), [formData.email]);
  const isPasswordValid = useMemo(() => validatePassword(formData.password), [formData.password]);
  const isConfirmPasswordValid = useMemo(
    () => validateConfirmPassword(formData.password, formData.confirmPassword),
    [formData.password, formData.confirmPassword]
  );
  const isFormDataValid = useMemo(() => {
    return isEmailValid && isPasswordValid && isConfirmPasswordValid;
  }, [isEmailValid, isPasswordValid, isConfirmPasswordValid]);

  const showLoginModalHandler = useCallback(() => {
    handleShowLoginModal(true);
    handleShowRegisterModal(false);
  }, [handleShowLoginModal, handleShowRegisterModal]);

  const onChangeFields = useCallback(
    (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    },
    [formData, setFormData]
  );

  const handleSignUp = useCallback(
    (event) => {
      event.preventDefault();

      dispatch(SIGN_UP(formData));
    },
    [formData, dispatch]
  );

  const handleRegisterMessageClear = useCallback(() => {
    dispatch(CLEAR_REGISTER_MESSAGE());
  }, [dispatch]);

  return (
    <>
      <RegisterModal
        formData={formData}
        onChange={onChangeFields}
        onSubmit={handleSignUp}
        isEmailValid={isEmailValid}
        isPasswordValid={isPasswordValid}
        isConfirmPasswordValid={isConfirmPasswordValid}
        isFormDataValid={isFormDataValid}
        isRegisterModalShowed={isRegisterModalShowed}
        handleShowLoginModal={showLoginModalHandler}
        handleShowRegisterModal={handleShowRegisterModal}
      />
      <Snack isSuccess={success} message={message} onHandleClose={handleRegisterMessageClear} />
    </>
  );
};

export default RegisterModalContainer;
