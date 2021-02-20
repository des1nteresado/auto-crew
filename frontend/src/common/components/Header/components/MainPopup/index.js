import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Menu, MenuItem, Box } from '@material-ui/core';

import { useCommonContext } from 'common/contexts/CommonContext';
import styles from './styles';

const MainPopup = ({ classes, anchorEl, handleCloseMenu, isAuth, showModalHandler }) => {
  const { handleShowLoginModal, handleShowRegisterModal } = useCommonContext();

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
      {isAuth ? (
        <Box>
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
  isAuth: PropTypes.bool.isRequired,
  handleShowLoginModal: PropTypes.func.isRequired,
  showModalHandler: PropTypes.func.isRequired,
  handleShowRegisterModal: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(MainPopup));
