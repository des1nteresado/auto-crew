import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const defaultContext = {
  isResetPasswordModalShowed: false,
  isRegisterModalShowed: false,
  isLoginModalShowed: false,
  handleShowResetPasswordModal: () => {},
  handleShowRegisterModal: () => {},
  handleShowLoginModal: () => {},
};

const CommonContext = createContext(defaultContext);

export const CommonContextProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  const { success, isAuth } = useSelector((state) => state.user);

  const [isResetPasswordModalShowed, setIsResetPasswordModalShowed] = useState(false);
  const [isRegisterModalShowed, setIsRegisterModalShowed] = useState(false);
  const [isLoginModalShowed, setLoginModalShowed] = useState(false);

  useEffect(() => {
    if (isAuth) {
      setLoginModalShowed(false);
    }
  }, [isAuth]);

  useEffect(() => {
    if (success) {
      setIsRegisterModalShowed(false);
    }
  }, [success]);

  const handleShowLoginModal = useCallback((modalState) => {
    setLoginModalShowed(modalState);
  }, []);

  const handleShowResetPasswordModal = useCallback(
    (modalState) => {
      setIsResetPasswordModalShowed(modalState);
    },
    []
  );

  const handleShowRegisterModal = useCallback(
    (modalState) => {
      setIsRegisterModalShowed(modalState);
    },
    []
  );

  return (
    <CommonContext.Provider
      value={{
        isResetPasswordModalShowed,
        isRegisterModalShowed,
        isLoginModalShowed,
        handleShowResetPasswordModal,
        handleShowRegisterModal,
        handleShowLoginModal,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export const useCommonContext = () => useContext(CommonContext);

CommonContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
