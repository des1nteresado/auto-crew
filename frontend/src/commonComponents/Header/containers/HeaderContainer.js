import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';

const HeaderContainer = ({
  handleShowLoginModal,
  handleShowRegisterModal,
  searchInput,
  onChangeSearchInput,
  handleShowFinder,
  showFinder,
}) => {
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
      const test = setTimeout(() => {
        openLink();
      }, 50);
      return () => clearTimeout(test);
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
      showFinder={showFinder}
      setShowFinder={handleShowFinder}
      isAuth={isAuth}
      firstName={firstName}
      anchorEl={anchorEl}
      handleCloseMenu={handleCloseMenu}
      showModalHandler={showModalHandler}
      isFilterMenuOpen={isFilterMenuOpen}
      handleOpenPage={handleOpenPage}
      searchInput={searchInput}
      onChange={onChangeSearchInput}
    />
  );
};

HeaderContainer.propTypes = {
  handleShowLoginModal: PropTypes.func.isRequired,
  handleShowRegisterModal: PropTypes.func.isRequired,
  handleShowFinder: PropTypes.func.isRequired,
  showFinder: PropTypes.bool.isRequired,
  searchInput: PropTypes.string.isRequired,
  onChangeSearchInput: PropTypes.func.isRequired,
};

export default React.memo(HeaderContainer);
