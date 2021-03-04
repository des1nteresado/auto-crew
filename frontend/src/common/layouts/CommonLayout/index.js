import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, withStyles } from '@material-ui/core';

import HeaderContainer from 'common/components/Header/containers/HeaderContainer';
import Footer from 'common/components/Footer/components/Footer';
import LoginModalContainer from 'modules/Auth/containers/LoginModalContainer';
import RegisterModalContainer from 'modules/Auth/containers/RegisterModalContainer';
import ResetPasswordModalContainer from 'modules/Auth/containers/ResetPasswordModalContainer';
import Loader from 'common/components/Loader';

import styles from './styles';

const CommonLayout = ({ classes, children, isLoading }) => {
  return (
    <Box>
      <Loader isLoading={isLoading} />
      <HeaderContainer />
      <LoginModalContainer />
      <RegisterModalContainer />
      <ResetPasswordModalContainer />
      <Container maxWidth="lg" className={classes.container}>
        {children}
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
