import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { validateEmail } from 'helpers/validations';
import ResetPasswordModal from '../components/ResetPasswordModal';
import { CLEAR_RESET_PASSWORD_RESPONSE_MESSAGES, RESET_PASSWORD } from '../actions';
import { useCommonContext } from 'common/contexts/CommonContext';

const ResetPasswordModalContainer = () => {
  const dispatch = useDispatch();

  const {
    isResetPasswordModalShowed,
    handleShowResetPasswordModal,
    handleShowLoginModal,
  } = useCommonContext();

  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);

  const { isLoading, isSuccess, messages } = useSelector((state) => state.user);

  useEffect(() => setIsEmailError(false), []);

  useEffect(() => {
    setEmail('');
  }, [isResetPasswordModalShowed]);

  const isEmailValid = useMemo(() => validateEmail(email), [email]);

  const showLoginModalHandler = useCallback(() => {
    handleShowResetPasswordModal(false);
    handleShowLoginModal(true);
  }, [handleShowLoginModal, handleShowResetPasswordModal]);

  const onChangeFields = useCallback(
    (event) => {
      setEmail(event.target.value);
      setIsEmailError(false);
    },
    [setEmail, setIsEmailError]
  );

  const handleSubmit = useCallback(() => {
    dispatch(RESET_PASSWORD({ email }));
  }, [dispatch, email]);

  const handleOpenStatusAfterResponse = useCallback(() => {
    if (isSuccess) {
      handleShowLoginModal(false);
    }

    dispatch(CLEAR_RESET_PASSWORD_RESPONSE_MESSAGES());
  }, [dispatch, isSuccess, handleShowLoginModal]);

  return (
    <ResetPasswordModal
      email={email}
      onChange={onChangeFields}
      isEmailValid={isEmailValid}
      isEmailError={isEmailError}
      isResetPasswordModalShowed={isResetPasswordModalShowed}
      handleShowResetPasswordModal={handleShowResetPasswordModal}
      handleShowLoginModal={showLoginModalHandler}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      messages={messages}
      isSuccess={isSuccess}
      handleOpenStatusAfterResponse={handleOpenStatusAfterResponse}
    />
  );
};

export default ResetPasswordModalContainer;
