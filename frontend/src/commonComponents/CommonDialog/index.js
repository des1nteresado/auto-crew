import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, Grid } from '@material-ui/core';

import styles from './styles';

const CommonDialog = ({ classes, isOpen, onClose, maxWidth, children, style, ...otherProps }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth={maxWidth} fullWidth {...otherProps}>
      <Grid className={clsx(classes.dialogContainer, style && style)}>{children}</Grid>
    </Dialog>
  );
};

CommonDialog.defaultProps = {
  isOpen: false,
  style: '',
  maxWidth: 'xs',
};

CommonDialog.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onClose: PropTypes.func.isRequired,
  maxWidth: PropTypes.string,
  isOpen: PropTypes.bool,
  style: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default React.memo(withStyles(styles)(CommonDialog));
