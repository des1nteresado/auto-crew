import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import { Snackbar, withStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import styles from './styles';

const Snack = ({ isSuccess, autoHideDuration, message, onHandleClose, classes }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isEmpty(message)) {
      setOpen(true);
    }
  }, [isSuccess, message]);

  const handleClose = useCallback(() => {
    setOpen(false);

    if (onHandleClose) {
      onHandleClose();
    }
  }, [onHandleClose]);

  return (
    <>
      {!isEmpty(message) && (
        <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
          <MuiAlert
            onClose={handleClose}
            elevation={6}
            variant="filled"
            severity={isSuccess ? 'success' : 'error'}
            className={classes.snackbar}
          >
            {message}
          </MuiAlert>
        </Snackbar>
      )}
    </>
  );
};

Snack.defaultProps = {
  isSuccess: false,
  message: '',
  onHandleClose: () => {},
  autoHideDuration: 4000,
};

Snack.propTypes = {
  isSuccess: PropTypes.bool,
  autoHideDuration: PropTypes.number,
  message: PropTypes.string,
  onHandleClose: PropTypes.func,
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default React.memo(withStyles(styles)(Snack));
