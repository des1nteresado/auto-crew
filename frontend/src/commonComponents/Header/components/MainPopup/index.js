import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Menu, MenuItem, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { USER_ROLES } from 'constants/userRoles';
import styles from './styles';

const MainPopup = ({
  classes,
  handleShowLoginModal,
  handleShowRegisterModal,
  anchorEl,
  handleCloseMenu,
  handleClickProfileButton,
  isMobileView,
  isAuth,
  handleClickOrderButton,
  handleClickCartButton,
  showModalHandler,
  handleClickAdminButton,
}) => {
  const { role } = useSelector((state) => state.user);

  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleCloseMenu}
      classes={{ paper: classes.menuContainer, list: classes.menuList }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      {isMobileView && <MenuItem onClick={handleClickCartButton}>Cart</MenuItem>}
      {isAuth ? (
        <Box>
          {[USER_ROLES.ADMIN, USER_ROLES.MERCHANT].includes(role) && (
            <MenuItem onClick={handleClickAdminButton}>Admin Panel</MenuItem>
          )}
          <MenuItem onClick={handleClickProfileButton}>Profile</MenuItem>
          {role === USER_ROLES.CUSTOMER && (
            <MenuItem onClick={handleClickOrderButton}>Orders</MenuItem>
          )}
          <MenuItem
            className={classes.logoutButton}
            onClick={() => {
              localStorage.removeItem('persist:user');
              document.location.reload(true);
            }}
          >
            Log Out
          </MenuItem>
        </Box>
      ) : (
        <Box>
          <MenuItem onClick={() => showModalHandler(handleShowLoginModal(true))}>Sign In</MenuItem>
          <MenuItem onClick={() => showModalHandler(handleShowRegisterModal(true))}>
            Sign Up
          </MenuItem>
        </Box>
      )}
    </Menu>
  );
};

MainPopup.defaultProps = {
  anchorEl: null,
};

MainPopup.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  anchorEl: PropTypes.oneOfType([PropTypes.object]),
  handleCloseMenu: PropTypes.func.isRequired,
  isMobileView: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  handleClickProfileButton: PropTypes.func.isRequired,
  handleShowLoginModal: PropTypes.func.isRequired,
  handleClickOrderButton: PropTypes.func.isRequired,
  handleClickCartButton: PropTypes.func.isRequired,
  showModalHandler: PropTypes.func.isRequired,
  handleShowRegisterModal: PropTypes.func.isRequired,
  handleClickAdminButton: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(MainPopup));
