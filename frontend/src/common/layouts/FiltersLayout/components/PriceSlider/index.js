import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, withStyles, Slider } from '@material-ui/core';

import FilterItem from '../FilterItem';
import { defaultPriceRange, defaultDiscountRange } from '../../constants';

import styles from './styles.js';

const PriceSlider = ({ classes, title, max, name, value, onChange }) => {
  return (
    <FilterItem
      title={title}
      style={classes.filterItem}
      isOpen={name === 'price' ? value !== defaultPriceRange : value !== defaultDiscountRange}
    >
      <Slider
        value={value}
        onChange={(event, newValue, inputName = name) => onChange(event, newValue, inputName)}
        name={name}
        step={5}
        max={max}
        valueLabelDisplay="auto"
      />
      <Box className={classes.priceValues}>
        <Typography variant="body1" display="inline" color="textSecondary">
          {name === 'price' ? `$${value[0]}` : `${value[0]}%`}
        </Typography>
        <Typography variant="body1" display="inline" color="textSecondary">
          {name === 'price' ? `$${value[1]}` : `${value[1]}%`}
        </Typography>
      </Box>
    </FilterItem>
  );
};

PriceSlider.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  value: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
};

export default React.memo(withStyles(styles)(PriceSlider));
