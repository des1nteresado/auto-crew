import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Loading from 'common/components/Loader';
import { SET_LOGIN_MODAL_SHOWED } from 'common/layouts/CommonLayout/actions';
import CommonLayout from '../components/CommonLayout';

const CommonLayoutContainer = ({ children, isLoading }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  const { isAuth } = useSelector((state) => state.user);
  const { success } = useSelector((state) => state.register);
  const { isLoadingData, isLoginModalShowed } = useSelector((state) => state.commonLayout);

  const [isResetPasswordModalShowed, setIsResetPasswordModalShowed] = useState(false);
  const [isRegisterModalShowed, setIsRegisterModalShowed] = useState(false);

  useEffect(() => {
    if (isAuth) {
      dispatch(SET_LOGIN_MODAL_SHOWED(false));
    }
  }, [isAuth, dispatch]);

  useEffect(() => {
    if (success) {
      setIsRegisterModalShowed(false);
    }
  }, [success]);

  const handleShowLoginModal = useCallback(
    (modalState) => {
      dispatch(SET_LOGIN_MODAL_SHOWED(modalState));
    },
    [dispatch]
  );

  const handleShowResetPasswordModal = useCallback(
    (modalState) => {
      setIsResetPasswordModalShowed(modalState);
    },
    [setIsResetPasswordModalShowed]
  );

  const handleShowRegisterModal = useCallback(
    (modalState) => {
      setIsRegisterModalShowed(modalState);
    },
    [setIsRegisterModalShowed]
  );

  // @ TODO: make context for same props

  return (
    <>
      <CommonLayout
        content={children}
        isLoginModalShowed={isLoginModalShowed}
        isResetPasswordModalShowed={isResetPasswordModalShowed}
        isRegisterModalShowed={isRegisterModalShowed}
        handleShowLoginModal={handleShowLoginModal}
        handleShowResetPasswordModal={handleShowResetPasswordModal}
        handleShowRegisterModal={handleShowRegisterModal}
        isLoadingSearchData={isLoadingData}
      />
      <Loading isLoading={isLoading} />
    </>
  );
};

CommonLayoutContainer.defaultProps = {
  isLoading: false,
};

CommonLayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};

export default React.memo(CommonLayoutContainer);
