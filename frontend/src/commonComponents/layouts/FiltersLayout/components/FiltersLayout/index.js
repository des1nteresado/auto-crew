import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { v1 as uuid } from 'uuid';
import { isEmpty, kebabCase } from 'lodash';
import { NavLink, useHistory } from 'react-router-dom';
import {
  Grid,
  Typography,
  Box,
  useTheme,
  Link,
  useMediaQuery,
  withStyles,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';

import { useRouteToGo } from 'helpers/hooks/useRouteToGo';
import Pagination from 'commonComponents/Pagination';
import BannersPanel from 'commonComponents/BannersPanel';
import Breadcrumbs from 'commonComponents/Breadcrumbs';
import palette from 'theme/palette';
import MobileBreadcrumbs from 'commonComponents/MobileBreadcrumbs';
import SocialBox from 'commonComponents/SocialBox/index.js';
import CommonButton from 'commonComponents/CommonButton';
import FiltersMenu from '../FiltersMenu';
import CheckboxGroup from '../CheckboxGroup';
import PriceSlider from '../PriceSlider';
import ROUTES from '../../../../../routes';

import styles from './styles.js';

const FiltersLayout = ({
  children,
  classes,
  productsByCategories,
  handleFollowCompany,
  isFollow,
  withBanner,
  companyInfo,
  formData,
  handleChangePrice,
  formSizes,
  formColors,
  onChangeFields,
  isAnyFilterActive,
  handleSetDefaultFilters,
  handleApplyFilters,
  submitedQuery,
  currentPage,
  handlePageUpdate,
  pageCount,
  pageNumber,
  selectedCategory,
}) => {
  const theme = useTheme();
  const history = useHistory();

  const isMobileView = useMediaQuery(theme.breakpoints.down('xs'));

  const goToCategories = useRouteToGo(ROUTES.CATEGORIES);
  const goToBrandsList = useRouteToGo(ROUTES.BRANDS_LIST);
  const goToFavorites = useRouteToGo(ROUTES.FAVORITES);

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const filterButtonClickHandler = useCallback((isOpen) => {
    setIsFilterMenuOpen(isOpen);
  }, []);

  const handleResetCategory = useCallback(() => {
    if (isEmpty(companyInfo)) {
      history.push(`${ROUTES.CATEGORIES}`);
    } else {
      history.push(`${ROUTES.COMPANY}/${companyInfo.pathName}`);
    }
    handleSetDefaultFilters();
  }, [companyInfo, handleSetDefaultFilters, history]);

  return (
    <Grid container spacing={4} className={classes.filtersLayout}>
      {isMobileView && (
        <Grid item xs={12}>
          <MobileBreadcrumbs
            currentPage={currentPage || companyInfo.title}
            withFilterButton
            onClickHandler={() => filterButtonClickHandler(true)}
          />
        </Grid>
      )}
      {!isMobileView && withBanner && (
        <Grid item xs={12}>
          <Box className={classes.links}>
            <CommonButton
              label="Brands"
              variant="text"
              className={classes.linkButton}
              onClick={goToBrandsList}
            />
            <CommonButton
              label="Categories"
              variant="text"
              className={classes.linkButton}
              onClick={goToCategories}
            />
            <CommonButton
              label="Favorites"
              variant="text"
              className={classes.linkButton}
              onClick={goToFavorites}
            />
          </Box>
        </Grid>
      )}
      {withBanner && (
        <Grid item xs={12}>
          <BannersPanel companyInfo={companyInfo} />
        </Grid>
      )}
      {!isMobileView && !isEmpty(companyInfo) && (
        <Grid item xs={12} className={classes.mainActions}>
          <CommonButton
            label={isFollow ? 'Unfollow' : 'Follow'}
            variant="contained"
            className={classes.followButton}
            startIcon={<FavoriteIcon />}
            style={{
              backgroundColor: isFollow ? palette.black : palette.secondary.main,
              color: isFollow ? palette.white : palette.black,
            }}
            onClick={() => handleFollowCompany(companyInfo._id)}
          />
          {companyInfo.socialNetworks.length > 0 && (
            <SocialBox style={classes.socialBox} socialNetworks={companyInfo.socialNetworks} />
          )}
        </Grid>
      )}
      {!isMobileView && (
        <Grid item xs={12} className={classes.topNavigation}>
          <Breadcrumbs>
            {isEmpty(companyInfo) ? (
              <Link href={`${ROUTES.CATEGORIES}`}>Categories</Link>
            ) : (
              <Link href={`${ROUTES.COMPANY}/${companyInfo.pathName}`}>{companyInfo.title}</Link>
            )}
          </Breadcrumbs>
        </Grid>
      )}
      {!isMobileView ? (
        <Grid item xs={3} className={classes.categoriesWithFilters}>
          <Box className={classes.activeCategory}>
            <Typography variant="h3">Clothing</Typography>
            {productsByCategories.map((category) => (
              <Box key={`${category.label}-${uuid()}`} className={classes.category}>
                <NavLink
                  key={`${category.label}-${uuid()}`}
                  to={
                    isEmpty(companyInfo)
                      ? `${ROUTES.CATEGORIES}/${kebabCase(category.label)}`
                      : `${ROUTES.COMPANY}/${companyInfo.pathName}/${kebabCase(category.label)}`
                  }
                  activeClassName={classes.activeSubCategory}
                  onClick={() => handleSetDefaultFilters(false)}
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
          <Box className={classes.filters}>
            <Typography variant="h3">Filter By</Typography>
            <PriceSlider
              title="Price"
              max={500}
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
                onClick={handleSetDefaultFilters}
                isDisabled={!isAnyFilterActive}
              />
              <CommonButton
                label="View items"
                variant="contained"
                onClick={handleApplyFilters}
                isDisabled={!isAnyFilterActive || productsByCategories.length === 0}
              />
            </Box>
          </Box>
        </Grid>
      ) : (
        <FiltersMenu
          isFilterMenuOpen={isFilterMenuOpen}
          handleOpenFiltersMenu={filterButtonClickHandler}
          productsByCategories={productsByCategories}
          companyInfo={companyInfo}
          formSizes={formSizes}
          onChangeFields={onChangeFields}
          formColors={formColors}
          formData={formData}
          handleChangePrice={handleChangePrice}
          handleSetDefaultFilters={handleSetDefaultFilters}
          isAnyFilterActive={isAnyFilterActive}
          handleApplyFilters={handleApplyFilters}
          handleResetCategory={handleResetCategory}
        />
      )}
      <Grid item xs={12} sm={9}>
        {children(submitedQuery === '')}
        {(submitedQuery !== '' || selectedCategory !== '') && pageCount > 0 && (
          <Box className={classes.pagination}>
            <Pagination
              pageCount={pageCount}
              currentPage={pageNumber}
              onChange={handlePageUpdate}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

FiltersLayout.defaultProps = {
  withBanner: false,
  isAnyFilterActive: false,
  productsByCategories: [],
  companyInfo: {},
  currentPage: null,
  handleFollowCompany: () => {},
  pageCount: 0,
};

FiltersLayout.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isFollow: PropTypes.bool.isRequired,
  pageCount: PropTypes.number,
  handleFollowCompany: PropTypes.func,
  productsByCategories: PropTypes.oneOfType([PropTypes.array]),
  companyInfo: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.func.isRequired,
  formData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleChangePrice: PropTypes.func.isRequired,
  withBanner: PropTypes.bool,
  isAnyFilterActive: PropTypes.bool,
  submitedQuery: PropTypes.string.isRequired,
  currentPage: PropTypes.string,
  formSizes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onChangeFields: PropTypes.func.isRequired,
  handleApplyFilters: PropTypes.func.isRequired,
  handlePageUpdate: PropTypes.func.isRequired,
  handleSetDefaultFilters: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  formColors: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default React.memo(withStyles(styles)(FiltersLayout));
