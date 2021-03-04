import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, withStyles } from '@material-ui/core';

import styles from './styles.js';

const AutocompleteInput = ({
  autocompleteValue,
  inputValue,
  valuesList,
  getOptionLabel,
  onAutocompleteChange,
  onInputChange,
  name,
  error,
  classes,
  helperText,
  label,
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const onBlur = useCallback(() => {
    setIsTouched(true);
  }, []);

  return (
    <Autocomplete
      value={autocompleteValue}
      classes={{
        paper: classes.autocompleteList,
      }}
      options={valuesList}
      getOptionLabel={getOptionLabel}
      onChange={(value) => onAutocompleteChange(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          value={inputValue}
          classes={{
            root: classes.autocompleteInput,
          }}
          onChange={onInputChange}
          name={name}
          onBlur={onBlur}
          label={label}
          variant="outlined"
          error={isTouched && error}
          helperText={isTouched && error && helperText}
        />
      )}
    />
  );
};

AutocompleteInput.defaultProps = {
  inputValue: '',
  autocompleteValue: {},
  valuesList: [],
  label: '',
  style: '',
  helperText: '',
  type: 'text',
  error: false,
  onAutocompleteChange: () => {},
  onInputChange: () => {},
  getOptionLabel: () => '',
};

AutocompleteInput.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  autocompleteValue: PropTypes.oneOfType([PropTypes.object]),
  valuesList: PropTypes.oneOfType([PropTypes.array]),
  onAutocompleteChange: PropTypes.func,
  onInputChange: PropTypes.func,
  inputValue: PropTypes.string,
  getOptionLabel: PropTypes.func,
  name: PropTypes.string.isRequired,
  helperText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.string,
  error: PropTypes.bool,
  style: PropTypes.string,
  type: PropTypes.string,
};

export default React.memo(withStyles(styles)(AutocompleteInput));
