import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Link, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import { DEFAULT_INPUT_LENGTH } from 'constants/inputOptions';
import { INVALID_EMAIL, INVALID_PASSWORD_CONFIRM } from 'constants/errorMessages';
import { wpLinks } from 'constants/links';
import CommonDialog from 'common/components/CommonDialog';
import CommonButton from 'common/components/CommonButton';
import CommonInput from 'common/components/CommonInput';
import { getPasswordError } from '../../helpers/validations';

import styles from './styles';

const RegisterModal = (props) => {
  const {
    formData: { email, password, confirmPassword },
    onChange,
    onSubmit,
    isEmailValid,
    isPasswordValid,
    isConfirmPasswordValid,
    classes,
    isRegisterModalShowed,
    isFormDataValid,
    handleShowLoginModal,
    handleShowRegisterModal,
  } = props;

  return (
    <CommonDialog
      isOpen={isRegisterModalShowed}
      style={classes.commomDialog}
      onClose={() => handleShowRegisterModal(false)}
    >
      <form onSubmit={onSubmit}>
        <CommonButton
          className={classes.closeButton}
          startIcon={<CloseIcon />}
          label=""
          variant="text"
          size="large"
          onClick={() => handleShowRegisterModal(false)}
        />
        <Grid container spacing={4} className={classes.dialogWrapper}>
          <Grid container item spacing={4} xs={12} className={classes.topActions}>
            <Grid item xs={12}>
              <Typography variant="h2" color="primary">
                Welcome to Auto-Crew!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" color="primary">
                Please create an account.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CommonInput
              value={email}
              onChange={onChange}
              name="email"
              label="Email"
              error={email !== '' && !isEmailValid}
              helperText={INVALID_EMAIL}
              inputProps={{
                maxLength: DEFAULT_INPUT_LENGTH,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <CommonInput
              type="password"
              value={password}
              onChange={onChange}
              name="password"
              label="Password"
              error={password !== '' && !isPasswordValid}
              helperText={getPasswordError(password)}
            />
          </Grid>
          <Grid item xs={12}>
            <CommonInput
              type="password"
              value={confirmPassword}
              onChange={onChange}
              name="confirmPassword"
              label="Confirm password"
              error={confirmPassword !== '' && !isConfirmPasswordValid}
              helperText={INVALID_PASSWORD_CONFIRM}
            />
          </Grid>
          <Grid container justify="center" item xs={12}>
            <Grid item xs={12} sm={8}>
              <CommonButton
                label="Create an account"
                variant="contained"
                disabled={!isFormDataValid}
                className={classes.submitButton}
                type="submit"
              />
              <Typography variant="body2" color="textPrimary">
                By signing up for an account you accept our{' '}
                <Link target="_blank" href={wpLinks.termsConditions}>
                  Terms
                </Link>{' '}
                and{' '}
                <Link target="_blank" href={wpLinks.privacyPolicy}>
                  Privacy Policy
                </Link>
                .
              </Typography>
              <CommonButton
                label="Sign in with an existing account"
                variant="text"
                className={classes.signInButton}
                onClick={handleShowLoginModal}
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </CommonDialog>
  );
};

RegisterModal.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  formData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isEmailValid: PropTypes.bool.isRequired,
  isPasswordValid: PropTypes.bool.isRequired,
  isFormDataValid: PropTypes.bool.isRequired,
  isConfirmPasswordValid: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isRegisterModalShowed: PropTypes.bool.isRequired,
  handleShowLoginModal: PropTypes.func.isRequired,
  handleShowRegisterModal: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(RegisterModal));
