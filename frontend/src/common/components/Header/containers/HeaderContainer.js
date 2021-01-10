import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';

const HeaderContainer = ({ handleShowLoginModal, handleShowRegisterModal }) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { isAuth } = useSelector((state) => state.user);
  const { firstName } = useSelector((state) => state.settings);

  const handleClickProfileButton = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleOpenMainMenu = useCallback((isOpen) => {
    setIsFilterMenuOpen(isOpen);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleOpenPage = useCallback(
    (openLink) => {
      handleOpenMainMenu(false);
      const openLinkCallback = setTimeout(() => {
        openLink();
      }, 50);
      return () => clearTimeout(openLinkCallback);
    },
    [handleOpenMainMenu]
  );

  const showModalHandler = useCallback(
    (showModal) => {
      handleCloseMenu();
      if (showModal) {
        showModal();
      }
    },
    [handleCloseMenu]
  );

  return (
    <Header
      handleShowLoginModal={handleShowLoginModal}
      handleShowRegisterModal={handleShowRegisterModal}
      handleClickProfileButton={handleClickProfileButton}
      handleOpenMainMenu={handleOpenMainMenu}
      isAuth={isAuth}
      firstName={firstName}
      anchorEl={anchorEl}
      handleCloseMenu={handleCloseMenu}
      showModalHandler={showModalHandler}
      isFilterMenuOpen={isFilterMenuOpen}
      handleOpenPage={handleOpenPage}
    />
  );
};

HeaderContainer.propTypes = {
  handleShowLoginModal: PropTypes.func.isRequired,
  handleShowRegisterModal: PropTypes.func.isRequired,
};

export default React.memo(HeaderContainer);
