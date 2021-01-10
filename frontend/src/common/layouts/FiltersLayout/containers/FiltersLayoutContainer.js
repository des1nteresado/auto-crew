import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

import { PEOPLE_CATEGORIES } from 'constants/peopleCategories';
import FiltersLayout from '../components/FiltersLayout';
import { defaultSizes, defaultColors, defaultPriceRange, defaultDiscountRange } from '../constants';
import { getStringQuery } from '../helpers';

const FiltersLayoutContainer = ({
  children,
  productsByCategories,
  handleFollowCompany,
  handleGetFilteredProducts,
  handleUpdateFilteredProducts,
  selectedCategory,
  isFollow,
  withBanner,
  companyInfo,
  currentPage,
  pageCount,
}) => {
  const { filterByPeopleCategory } = useSelector((state) => state.global);

  const [formData, setFormData] = useState({
    price: defaultPriceRange,
    discount: defaultDiscountRange,
  });
  const [formSizes, setFormSizes] = useState({ ...defaultSizes });
  const [formColors, setFormColors] = useState({ ...defaultColors });
  const [submitedQuery, setSubmitedQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const isFirstRender = useRef(true);
  const isFilterSwitched = useRef(false);

  const isAnyFilterActive = useMemo(
    () =>
      formData.price !== defaultPriceRange ||
      formData.discount !== defaultDiscountRange ||
      !isEqual(formSizes, defaultSizes) ||
      !isEqual(formColors, defaultColors),
    [formData, formSizes, formColors]
  );

  const isWomensFilterActive = useMemo(() => filterByPeopleCategory === PEOPLE_CATEGORIES.WOMEN, [
    filterByPeopleCategory,
  ]);

  const query = useMemo(
    () => getStringQuery(formData, formColors, formSizes, isWomensFilterActive),
    [formColors, formSizes, isWomensFilterActive, formData]
  );

  const handleSetDefaultFilters = useCallback(
    (isClearFilter = true) => {
      setFormData({ price: defaultPriceRange, discount: defaultDiscountRange });
      setFormSizes({ ...defaultSizes });
      setFormColors({ ...defaultColors });
      setSubmitedQuery('');
      setPageNumber(1);

      if (isClearFilter === true) {
        handleUpdateFilteredProducts([]);
      }
    },
    [handleUpdateFilteredProducts]
  );

  useEffect(() => {
    return () => {
      handleSetDefaultFilters();
    };
  }, [handleSetDefaultFilters]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    isFilterSwitched.current = true;
  }, [filterByPeopleCategory]);

  useEffect(() => {
    if (submitedQuery === '') {
      setPageNumber(1);
    }
  }, [submitedQuery, selectedCategory]);

  useEffect(() => {
    handleSetDefaultFilters();
  }, [filterByPeopleCategory, handleSetDefaultFilters]);

  useEffect(() => {
    if (!isAnyFilterActive) {
      handleUpdateFilteredProducts([]);
      setSubmitedQuery('');
      setPageNumber(1);
    }
  }, [isAnyFilterActive, handleUpdateFilteredProducts]);

  useEffect(() => {
    if (selectedCategory !== '' && !isAnyFilterActive && !isFilterSwitched.current) {
      handleGetFilteredProducts(pageNumber, query);
    } else {
      isFilterSwitched.current = false;
    }
  }, [handleGetFilteredProducts, query, pageNumber, isAnyFilterActive, selectedCategory]);

  const handleApplyFilters = useCallback(() => {
    if (isAnyFilterActive) {
      if (query !== submitedQuery) {
        setPageNumber(1);
        handleGetFilteredProducts(1, query);
      } else {
        handleGetFilteredProducts(pageNumber, query);
      }

      setSubmitedQuery(query);
    }
  }, [handleGetFilteredProducts, pageNumber, submitedQuery, isAnyFilterActive, query]);

  useEffect(handleApplyFilters, [pageNumber]);

  const handleChangeFormData = useCallback(
    (event, newValue, name) => {
      setFormData({ ...formData, [name]: newValue });
    },
    [formData]
  );

  const onChangeFields = useCallback(
    (event) => {
      if (Object.keys(formSizes).includes(event.target.name)) {
        setFormSizes({
          ...formSizes,
          [event.target.name]: event.target.checked,
        });
      } else {
        setFormColors({
          ...formColors,
          [event.target.name]: event.target.checked,
        });
      }
    },
    [formSizes, formColors]
  );

  const handlePageUpdate = useCallback((page) => {
    setPageNumber(page);
  }, []);

  return (
    <FiltersLayout
      isFollow={isFollow}
      productsByCategories={productsByCategories}
      handleFollowCompany={handleFollowCompany}
      withBanner={withBanner}
      companyInfo={companyInfo}
      formSizes={formSizes}
      onChangeFields={onChangeFields}
      formColors={formColors}
      formData={formData}
      handleChangePrice={handleChangeFormData}
      handleSetDefaultFilters={handleSetDefaultFilters}
      isAnyFilterActive={isAnyFilterActive}
      handleApplyFilters={handleApplyFilters}
      submitedQuery={submitedQuery}
      currentPage={currentPage}
      handlePageUpdate={handlePageUpdate}
      pageCount={pageCount}
      pageNumber={pageNumber}
      selectedCategory={selectedCategory}
    >
      {children}
    </FiltersLayout>
  );
};

FiltersLayoutContainer.defaultProps = {
  withBanner: false,
  isFollow: false,
  productsByCategories: [],
  companyInfo: {},
  currentPage: null,
  handleFollowCompany: () => {},
};

FiltersLayoutContainer.propTypes = {
  isFollow: PropTypes.bool,
  pageCount: PropTypes.number.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  handleFollowCompany: PropTypes.func,
  productsByCategories: PropTypes.oneOfType([PropTypes.array]),
  companyInfo: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.func.isRequired,
  handleGetFilteredProducts: PropTypes.func.isRequired,
  handleUpdateFilteredProducts: PropTypes.func.isRequired,
  currentPage: PropTypes.string,
  withBanner: PropTypes.bool,
};

export default React.memo(FiltersLayoutContainer);
