import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { validateEmail } from 'helpers/validations';
import ResetPasswordModal from '../components/ResetPasswordModal';
import { CLEAR_RESET_PASSWORD_RESPONSE_MESSAGES, RESET_PASSWORD } from '../actions';

const ResetPasswordModalContainer = ({
  isResetPasswordModalShowed,
  handleShowResetPasswordModal,
  handleShowLoginModal,
}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);

  const { isLoading, isSuccess, messages } = useSelector((state) => state.resetPassword);

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

ResetPasswordModalContainer.propTypes = {
  isResetPasswordModalShowed: PropTypes.bool.isRequired,
  handleShowResetPasswordModal: PropTypes.func.isRequired,
  handleShowLoginModal: PropTypes.func.isRequired,
};

export default React.memo(ResetPasswordModalContainer);
