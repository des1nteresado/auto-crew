import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Typography, withStyles, useTheme, useMediaQuery } from '@material-ui/core';

import Logo from 'static/images/logo.png';

import ROUTES from 'routes';
import { useRouteToGo } from 'helpers/hooks/useRouteToGo';
import MainMenu from '../MainMenu';
import MainPopup from '../MainPopup';

import styles from './styles';

const Header = ({
  classes,
  handleShowLoginModal,
  handleShowRegisterModal,
  handleClickProfileButton,
  handleOpenMainMenu,
  isAuth,
  firstName,
  anchorEl,
  handleCloseMenu,
  showModalHandler,
  isFilterMenuOpen,
  handleOpenPage,
}) => {
  const theme = useTheme();

  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const goToHome = useRouteToGo(ROUTES.HOME);
  const goToUserProfile = useRouteToGo(ROUTES.PROFILE_SETTIGNS_PAGE);

  return (
    <Box className={classes.header}>
      <Container className={classes.wrapper} maxWidth="lg">
        {isMobileView && (
          <Box className={classes.menuButton} onClick={() => handleOpenMainMenu(true)} />
        )}
        <img src={Logo} alt="logo" onClick={goToHome} className={classes.logo} />
        <Box className={classes.mainActions}>
          <Box className={classes.userProfile} onClick={handleClickProfileButton}>
            <div className={classes.profileIcon} />
            {isAuth && (
              <Typography variant="h4" color="textPrimary" noWrap>
                {firstName}
              </Typography>
            )}
          </Box>
        </Box>
        <MainPopup
          anchorEl={anchorEl}
          handleCloseMenu={handleCloseMenu}
          isAuth={isAuth}
          showModalHandler={showModalHandler}
          handleClickProfileButton={goToUserProfile}
          handleShowLoginModal={handleShowLoginModal}
          handleShowRegisterModal={handleShowRegisterModal}
        />
        <MainMenu
          isFilterMenuOpen={isFilterMenuOpen}
          handleOpenMainMenu={handleOpenMainMenu}
          handleOpenPage={handleOpenPage}
        />
      </Container>
    </Box>
  );
};

Header.defaultProps = {
  anchorEl: null,
};

Header.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleShowLoginModal: PropTypes.func.isRequired,
  handleShowRegisterModal: PropTypes.func.isRequired,
  handleClickProfileButton: PropTypes.func.isRequired,
  handleOpenMainMenu: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isFilterMenuOpen: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  anchorEl: PropTypes.oneOfType([PropTypes.object]),
  showModalHandler: PropTypes.func.isRequired,
  handleOpenPage: PropTypes.func.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(Header));
