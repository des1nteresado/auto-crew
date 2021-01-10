import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

import styles from './styles.js';

const ProductPropertyInfo = ({ classes, title, value, style }) => {
  return (
    <Box className={clsx(classes.productProperty, style && style)}>
      <Typography variant="body1" display="inline">
        {title}:
      </Typography>
      <Typography className={classes.propertyValue} variant="h4" display="inline">
        {value}
      </Typography>
    </Box>
  );
};

ProductPropertyInfo.defaultProps = {
  style: '',
  title: '',
  value: '',
};

ProductPropertyInfo.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  title: PropTypes.string,
  style: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

export default React.memo(withStyles(styles)(ProductPropertyInfo));
