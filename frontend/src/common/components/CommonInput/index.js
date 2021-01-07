import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { v1 as uuid } from 'uuid';
import { TextField, withStyles } from '@material-ui/core';

import styles from './styles.js';

const CommonInput = ({
  value,
  name,
  style,
  error,
  classes,
  multiline,
  helperText,
  label,
  isTouchedByDefault,
  ...otherProps
}) => {
  const inputId = `${name}-${uuid()}`;

  const [isTouched, setIsTouched] = useState(false);

  const onBlur = useCallback(() => {
    setIsTouched(true);
  }, [setIsTouched]);

  return (
    <TextField
      value={value}
      classes={{
        root: clsx(classes.root, style && style),
      }}
      name={name}
      id={inputId}
      label={label}
      autoComplete="off"
      onBlur={onBlur}
      multiline={multiline}
      error={(isTouched || isTouchedByDefault) && error}
      helperText={
        !multiline ? (isTouched || isTouchedByDefault) && error && helperText : helperText
      }
      {...otherProps}
    />
  );
};

CommonInput.defaultProps = {
  name: uuid(),
  value: '',
  label: '',
  style: '',
  helperText: '',
  type: 'text',
  error: false,
  multiline: false,
  isTouchedByDefault: false,
  onChange: () => {},
};

CommonInput.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  helperText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.string,
  error: PropTypes.bool,
  multiline: PropTypes.bool,
  isTouchedByDefault: PropTypes.bool,
  style: PropTypes.string,
  type: PropTypes.string,
};

export default React.memo(withStyles(styles)(CommonInput));
