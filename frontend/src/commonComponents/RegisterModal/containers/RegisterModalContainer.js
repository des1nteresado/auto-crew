import React, { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { validateEmail } from 'helpers/validations';
import { validatePassword, validateConfirmPassword } from '../helpers/validations';

import RegisterModal from '../components/RegisterModal';
import Snack from '../../SnackBar';
import { CLEAR_REGISTER_MESSAGE, SIGN_UP } from '../actions';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterModalContainer = ({
  isRegisterModalShowed,
  handleShowLoginModal,
  handleShowRegisterModal,
}) => {
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  const { success, message } = useSelector((state) => state.register);

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

RegisterModalContainer.propTypes = {
  isRegisterModalShowed: PropTypes.bool.isRequired,
  handleShowLoginModal: PropTypes.func.isRequired,
  handleShowRegisterModal: PropTypes.func.isRequired,
};

export default React.memo(RegisterModalContainer);
