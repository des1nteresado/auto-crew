import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Typography, withStyles, useTheme, useMediaQuery } from '@material-ui/core';

import Logo from 'static/images/logo.svg';

import ROUTES from 'routes';
import MainMenu from '../MainMenu';
import MainPopup from '../MainPopup';
import CartBadge from '../CartBadge';
import { useRouteToGo } from '../../../../helpers/hooks/useRouteToGo';

import styles from './styles';

const Header = ({
  classes,
  handleShowLoginModal,
  handleShowRegisterModal,
  handleClickProfileButton,
  handleOpenMainMenu,
  showFinder,
  setShowFinder,
  productsQuantity,
  isAuth,
  firstName,
  anchorEl,
  handleCloseMenu,
  showModalHandler,
  isFilterMenuOpen,
  handleOpenPage,
  handlePeopleFilterChange,
  filterByPeopleCategory,
  withoutFavoritesIcon,
}) => {
  const theme = useTheme();

  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const goToCart = useRouteToGo(ROUTES.CART);
  const goToAdminPanel = useRouteToGo(ROUTES.ADMIN_PAGE);
  const goToFavorites = useRouteToGo(ROUTES.FAVORITES);
  const goToHome = useRouteToGo(ROUTES.HOME);
  const goToUserProfile = useRouteToGo(ROUTES.PROFILE_SETTIGNS_PAGE);
  const goToOrdersPage = useRouteToGo(ROUTES.ORDERS_PAGE);

  // @ TODO: clenup, MAGIC NUMBERS, img fix
  return (
    <Box className={classes.header}>
      <Container className={classes.wrapper} maxWidth="lg">
        {isMobileView && (
          <Box className={classes.menuButton} onClick={() => handleOpenMainMenu(true)} />
        )}
        <img
          // src={Logo}
          src=""
          alt="logo"
          onClick={goToHome}
          className={classes.logo}
          style={{ marginLeft: withoutFavoritesIcon ? 70 : 170 }}
        />
        <Box className={classes.mainActions} style={{ minWidth: withoutFavoritesIcon ? 200 : 300 }}>
          {!isMobileView && (
            <>
              <Box onClick={() => setShowFinder(!showFinder)} className={classes.searchButton} />
              {!withoutFavoritesIcon && (
                <Box onClick={goToFavorites} className={classes.favoritesButton} />
              )}
              <CartBadge value={productsQuantity}>
                <Box onClick={goToCart} className={classes.cartButton} />
              </CartBadge>
            </>
          )}
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
          isMobileView={isMobileView}
          showModalHandler={showModalHandler}
          handleClickProfileButton={goToUserProfile}
          handleClickCartButton={goToCart}
          handleClickOrderButton={goToOrdersPage}
          handleShowLoginModal={handleShowLoginModal}
          handleShowRegisterModal={handleShowRegisterModal}
          handleClickAdminButton={goToAdminPanel}
        />
        <MainMenu
          isFilterMenuOpen={isFilterMenuOpen}
          handleOpenMainMenu={handleOpenMainMenu}
          handleOpenPage={handleOpenPage}
          handleShowFinder={setShowFinder}
          filterByPeopleCategory={filterByPeopleCategory}
          handlePeopleFilterChange={handlePeopleFilterChange}
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
  showFinder: PropTypes.bool.isRequired,
  setShowFinder: PropTypes.func.isRequired,
  productsQuantity: PropTypes.number.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isFilterMenuOpen: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  filterByPeopleCategory: PropTypes.string.isRequired,
  handlePeopleFilterChange: PropTypes.func.isRequired,
  anchorEl: PropTypes.oneOfType([PropTypes.object]),
  showModalHandler: PropTypes.func.isRequired,
  handleOpenPage: PropTypes.func.isRequired,
  withoutFavoritesIcon: PropTypes.bool.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(Header));
