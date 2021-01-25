import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Backdrop, CircularProgress, withStyles } from '@material-ui/core';

import styles from './styles';

const Loader = ({ classes, isLoading, style }) => {
  return (
    <Backdrop className={clsx(classes.loader, style && style)} open={isLoading}>
      <CircularProgress />
    </Backdrop>
  );
};

Loader.defaultProps = {
  isLoading: false,
  style: '',
};

Loader.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  style: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default React.memo(withStyles(styles)(Loader));
