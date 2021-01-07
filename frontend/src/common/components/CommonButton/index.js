import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const CommonButton = ({ label, isDisabled, ...otherProps }) => {
  return (
    <Button disabled={isDisabled} disableRipple disableFocusRipple {...otherProps}>
      {label}
    </Button>
  );
};

CommonButton.defaultProps = {
  label: 'Button',
  isDisabled: false,
};

CommonButton.propTypes = {
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
};

export default React.memo(CommonButton);
