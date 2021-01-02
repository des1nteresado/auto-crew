import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, withStyles, Drawer } from '@material-ui/core';
import { v1 as uuid } from 'uuid';
import { isEmpty, kebabCase } from 'lodash';
import { NavLink, useHistory } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

import CommonButton from 'commonComponents/CommonButton';
import ROUTES from 'routes';
import PriceSlider from '../PriceSlider';
import CheckboxGroup from '../CheckboxGroup';

import styles from './styles.js';

const FiltersMenu = ({
  classes,
  isFilterMenuOpen,
  handleOpenFiltersMenu,
  productsByCategories,
  companyInfo,
  formData,
  handleChangePrice,
  formSizes,
  onChangeFields,
  formColors,
  isAnyFilterActive,
  handleSetDefaultFilters,
  handleApplyFilters,
  handleResetCategory,
}) => {
  return (
    <Drawer
      anchor="right"
      open={isFilterMenuOpen}
      classes={{ paper: classes.filtersMenu }}
      onClose={() => handleOpenFiltersMenu(false)}
    >
      <CommonButton
        className={classes.closeButton}
        startIcon={<CloseIcon />}
        label=""
        variant="text"
        size="large"
        onClick={() => handleOpenFiltersMenu(false)}
      />
      <Box className={classes.activeCategory}>
        <Typography variant="h3">Clothing</Typography>
        <Box className={classes.subCategoriesContainer}>
          {productsByCategories.map((category) => (
            <Box key={`${category.label}-${uuid()}`} className={classes.subCategory}>
              <NavLink
                to={
                  isEmpty(companyInfo)
                    ? `${ROUTES.CATEGORIES}/${kebabCase(category.label)}`
                    : `${ROUTES.COMPANY}/${companyInfo.pathName}/${kebabCase(category.label)}`
                }
                activeClassName={classes.activeSubCategory}
                onClick={() => {
                  handleSetDefaultFilters(false);
                  handleOpenFiltersMenu(false);
                }}
              >
                <Typography variant="body1" color="textPrimary">
                  {category.label}
                </Typography>
              </NavLink>
              <CommonButton
                className={classes.resetCategory}
                startIcon={<CloseIcon />}
                label=""
                variant="text"
                size="medium"
                onClick={handleResetCategory}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography variant="h3" className={classes.filterTitle}>
          Filter By
        </Typography>
        <PriceSlider
          title="Price"
          max={1000}
          value={formData.price}
          name="price"
          onChange={handleChangePrice}
        />
        <PriceSlider
          title="Discount"
          max={100}
          value={formData.discount}
          name="discount"
          onChange={handleChangePrice}
        />
        <CheckboxGroup title="Size" values={formSizes} onChange={onChangeFields} />
        <CheckboxGroup title="Color" values={formColors} onChange={onChangeFields} isColor />
        <Box className={classes.filterActions}>
          <CommonButton
            className={classes.cancelButton}
            label="Clear"
            variant="text"
            color="secondary"
            onClick={() => {
              handleSetDefaultFilters();
              handleOpenFiltersMenu(false);
            }}
            isDisabled={!isAnyFilterActive}
          />
          <CommonButton
            label="View items"
            variant="contained"
            onClick={() => {
              handleApplyFilters();
              handleOpenFiltersMenu(false);
            }}
            isDisabled={!isAnyFilterActive}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

FiltersMenu.defaultProps = {
  productsByCategories: [],
  companyInfo: {},
};

FiltersMenu.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isFilterMenuOpen: PropTypes.bool.isRequired,
  productsByCategories: PropTypes.oneOfType([PropTypes.array]),
  companyInfo: PropTypes.oneOfType([PropTypes.object]),
  handleOpenFiltersMenu: PropTypes.func.isRequired,
  formSizes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onChangeFields: PropTypes.func.isRequired,
  formColors: PropTypes.oneOfType([PropTypes.object]).isRequired,
  formData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleChangePrice: PropTypes.func.isRequired,
  isAnyFilterActive: PropTypes.bool.isRequired,
  handleApplyFilters: PropTypes.func.isRequired,
  handleResetCategory: PropTypes.func.isRequired,
  handleSetDefaultFilters: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(FiltersMenu));
