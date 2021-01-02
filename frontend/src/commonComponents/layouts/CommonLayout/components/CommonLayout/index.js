import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, withStyles } from '@material-ui/core';

import HeaderContainer from 'commonComponents/Header/containers/HeaderContainer';
import Footer from 'commonComponents/Footer/components/Footer';
import LoginModalContainer from 'commonComponents/LoginModal/containers/LoginModalContainer';
import RegisterModalContainer from 'commonComponents/RegisterModal/containers/RegisterModalContainer';
import ResetPasswordModalContainer from 'commonComponents/ResetPasswordModal/containers/ResetPasswordModalContainer';

import styles from './styles';

const CommonLayout = ({
  content,
  classes,
  isLoginModalShowed,
  isResetPasswordModalShowed,
  isRegisterModalShowed,
  handleShowLoginModal,
  handleShowResetPasswordModal,
  handleShowRegisterModal,
}) => {
  return (
    <Box>
      <HeaderContainer
        handleShowRegisterModal={handleShowRegisterModal}
        handleShowLoginModal={handleShowLoginModal}
      />
      <LoginModalContainer
        isLoginModalShowed={isLoginModalShowed}
        handleShowLoginModal={handleShowLoginModal}
        handleShowResetPasswordModal={handleShowResetPasswordModal}
        handleShowRegisterModal={handleShowRegisterModal}
      />
      <RegisterModalContainer
        isRegisterModalShowed={isRegisterModalShowed}
        handleShowLoginModal={handleShowLoginModal}
        handleShowRegisterModal={handleShowRegisterModal}
      />
      <ResetPasswordModalContainer
        isResetPasswordModalShowed={isResetPasswordModalShowed}
        handleShowResetPasswordModal={handleShowResetPasswordModal}
        handleShowLoginModal={handleShowLoginModal}
      />
      <Container maxWidth="lg" className={classes.container}>
        {content}
      </Container>
      <Footer />
    </Box>
  );
};

CommonLayout.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  content: PropTypes.node.isRequired,
  isLoginModalShowed: PropTypes.bool.isRequired,
  isResetPasswordModalShowed: PropTypes.bool.isRequired,
  isRegisterModalShowed: PropTypes.bool.isRequired,
  handleShowLoginModal: PropTypes.func.isRequired,
  handleShowResetPasswordModal: PropTypes.func.isRequired,
  handleShowRegisterModal: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(CommonLayout));
