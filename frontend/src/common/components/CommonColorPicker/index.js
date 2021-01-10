import React from 'react';
import PropTypes from 'prop-types';
import { Radio, Typography, withStyles } from '@material-ui/core';

import styles from './styles';

const CommonColorPicker = ({ classes, value, selectedValue, disabled, ...other }) => {
  return (
    <Radio
      classes={{ ...classes }}
      disableRipple
      value={value}
      disabled={disabled}
      checkedIcon={<Typography variant="body2">{value}</Typography>}
      icon={<Typography variant="body2">{value}</Typography>}
      checked={selectedValue === value}
      {...other}
    />
  );
};

CommonColorPicker.defaultProps = {
  disabled: false,
};

CommonColorPicker.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default React.memo(withStyles(styles)(CommonColorPicker));
