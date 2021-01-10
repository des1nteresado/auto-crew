import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  withStyles,
} from '@material-ui/core';
import { isEqual, startCase } from 'lodash';

import FilterItem from '../FilterItem';
import { defaultSizes, defaultColors } from '../../constants';

import styles from './styles.js';

const CheckboxGroup = ({ classes, title, values, onChange, isColor }) => {
  return (
    <FilterItem
      title={title}
      isOpen={isColor ? !isEqual(values, defaultColors) : !isEqual(values, defaultSizes)}
    >
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          {Object.keys(values).map((dataKey) => {
            const dataObj = values[dataKey];

            return (
              <FormControlLabel
                key={dataKey}
                className={classes.checkboxContainer}
                control={
                  <Checkbox
                    checked={dataObj}
                    onChange={onChange}
                    disableRipple
                    classes={{ colorSecondary: classes.checkbox }}
                    name={dataKey}
                  />
                }
                label={
                  <Typography variant="body1" display="inline" color="textSecondary">
                    {isColor ? startCase(dataKey) : dataKey.toUpperCase()}
                  </Typography>
                }
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </FilterItem>
  );
};

CheckboxGroup.defaultProps = {
  isColor: false,
  title: '',
};

CheckboxGroup.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  values: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  isColor: PropTypes.bool,
};

export default React.memo(withStyles(styles)(CheckboxGroup));
