import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import CommonButton from '../CommonButton';
import CommonDialog from '../CommonDialog';

import styles from './styles';

const RemoveConfirmationModal = ({
  classes,
  handleSubmit,
  subTitle,
  handleRemoveModalClose,
  isOpen,
}) => {
  return (
    <CommonDialog isOpen={isOpen} onClose={handleRemoveModalClose} style={classes.commonDialog}>
      <Box className={classes.cancelWrapper}>
        <CommonButton
          className={classes.closeButton}
          startIcon={<CloseIcon />}
          label=""
          variant="text"
          size="large"
          onClick={handleRemoveModalClose}
        />
      </Box>
      <Typography variant="h3" align="center" className={classes.modalTitle}>
        Are you sure, that you want to delete this {subTitle}?
      </Typography>
      <Box className={classes.buttonsWrapper}>
        <CommonButton
          className={classes.controlButton}
          label="Yes"
          variant="contained"
          onClick={handleSubmit}
        />
        <CommonButton
          className={classes.controlButton}
          label="No"
          variant="outlined"
          onClick={handleRemoveModalClose}
        />
      </Box>
    </CommonDialog>
  );
};

RemoveConfirmationModal.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  subTitle: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleRemoveModalClose: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(RemoveConfirmationModal));
