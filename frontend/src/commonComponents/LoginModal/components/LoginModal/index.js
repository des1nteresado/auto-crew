import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import CommonDialog from 'commonComponents/CommonDialog';
import CommonButton from 'commonComponents/CommonButton';
import CommonInput from 'commonComponents/CommonInput';
import { INVALID_EMAIL, INVALID_BASE_INPUT } from 'constants/errorMessages';

import styles from './styles';

const LoginModal = (props) => {
  const {
    formData: { email, password },
    onChange,
    onSubmit,
    isEmailValid,
    isPasswordValid,
    classes,
    isLoginModalShowed,
    handleShowLoginModal,
    handleShowResetPasswordModal,
    handleShowRegisterModal,
  } = props;

  return (
    <CommonDialog
      isOpen={isLoginModalShowed}
      style={classes.commomDialog}
      onClose={() => handleShowLoginModal(false)}
    >
      <form onSubmit={onSubmit}>
        <CommonButton
          className={classes.closeButton}
          startIcon={<CloseIcon />}
          label=""
          variant="text"
          size="large"
          onClick={() => handleShowLoginModal(false)}
        />
        <Grid container spacing={4} className={classes.dialogWrapper}>
          <Grid container item spacing={4} xs={12} className={classes.topActions}>
            <Grid item xs={12}>
              <Typography variant="h2" color="primary">
                Welcome back!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" color="primary">
                Please sign in.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CommonInput
              value={email}
              onChange={onChange}
              name="email"
              label="Email"
              autoFocus
              error={email != '' && !isEmailValid}
              helperText={INVALID_EMAIL}
            />
          </Grid>
          <Grid item xs={12} className={classes.passwordBox}>
            <CommonInput
              type="password"
              value={password}
              onChange={onChange}
              name="password"
              label="Password"
              error={password != '' && !isPasswordValid}
              helperText={INVALID_BASE_INPUT}
            />
            <CommonButton
              label=" Forgot your password?"
              variant="text"
              className={classes.resetPassword}
              onClick={handleShowResetPasswordModal}
            />
          </Grid>
          <Grid item xs={12}>
            <CommonButton
              label="Sign in"
              variant="contained"
              disabled={!(isEmailValid && isPasswordValid)}
              type="submit"
            />
            <CommonButton
              label="Create an account"
              variant="text"
              className={classes.signUpButton}
              onClick={handleShowRegisterModal}
            />
          </Grid>
        </Grid>
      </form>
    </CommonDialog>
  );
};

LoginModal.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  formData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isEmailValid: PropTypes.bool.isRequired,
  isPasswordValid: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoginModalShowed: PropTypes.bool.isRequired,
  handleShowLoginModal: PropTypes.func.isRequired,
  handleShowResetPasswordModal: PropTypes.func.isRequired,
  handleShowRegisterModal: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(LoginModal));
