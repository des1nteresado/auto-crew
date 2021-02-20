import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import CommonDialog from 'common/components/CommonDialog';
import CommonButton from 'common/components/CommonButton';
import CommonInput from 'common/components/CommonInput';
import Snack from 'common/components/SnackBar';
import Loading from 'common/components/Loader';

import styles from './styles';

const ResetPasswordModal = (props) => {
  const {
    email,
    onChange,
    isEmailValid,
    classes,
    isResetPasswordModalShowed,
    handleShowResetPasswordModal,
    handleShowLoginModal,
    handleSubmit,
    isLoading,
    messages,
    isSuccess,
    handleOpenStatusAfterResponse,
  } = props;

  return (
    <>
      <CommonDialog
        isOpen={isResetPasswordModalShowed}
        style={classes.commomDialog}
        onClose={() => handleShowResetPasswordModal(false)}
      >
        <CommonButton
          className={classes.backButton}
          startIcon={<ArrowBackIosRoundedIcon />}
          label=""
          variant="text"
          size="medium"
          onClick={handleShowLoginModal}
        />
        <CommonButton
          className={classes.closeButton}
          startIcon={<CloseIcon />}
          label=""
          variant="text"
          size="large"
          onClick={() => handleShowResetPasswordModal(false)}
        />
        <Grid container spacing={4} className={classes.dialogWrapper}>
          <Grid item xs={12}>
            <Typography variant="h2" color="primary">
              Reset Password
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.emailInput}>
            <CommonInput value={email} onChange={onChange} name="email" label="Email" />
          </Grid>
          <Grid item xs={12} className={classes.submitButton}>
            <CommonButton
              label="Send"
              variant="contained"
              disabled={!isEmailValid}
              onClick={handleSubmit}
            />
          </Grid>
        </Grid>
      </CommonDialog>
      <Loading isLoading={isLoading} />
      <Snack
        isSuccess={isSuccess}
        message={messages}
        onHandleClose={handleOpenStatusAfterResponse}
      />
    </>
  );
};

ResetPasswordModal.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  email: PropTypes.string.isRequired,
  messages: PropTypes.string.isRequired,
  isEmailValid: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleOpenStatusAfterResponse: PropTypes.func.isRequired,
  isResetPasswordModalShowed: PropTypes.bool.isRequired,
  handleShowResetPasswordModal: PropTypes.func.isRequired,
  handleShowLoginModal: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(ResetPasswordModal));
