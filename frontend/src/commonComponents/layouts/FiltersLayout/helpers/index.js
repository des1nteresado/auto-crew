import { isEqual, startCase } from 'lodash';

import {
  defaultSizes,
  womensSizeChart,
  mensSizeChart,
  defaultColors,
  defaultPriceRange,
  defaultDiscountRange,
} from '../constants';

export const getStringQuery = (formData, formColors, formSizes, isWomensFilterActive) => {
  let queryString = ``;

  if (!isEqual(formData.price, defaultPriceRange)) {
    queryString += `price=${formData.price[0]}-${formData.price[1]}&`;
  }
  if (!isEqual(formData.discount, defaultDiscountRange)) {
    queryString += `discount=${formData.discount[0]}-${formData.discount[1]}&`;
  }
  if (!isEqual(formColors, defaultColors)) {
    queryString += 'color=';
    Object.keys(formColors).forEach((dataKey) => {
      const dataObj = formColors[dataKey];
      if (dataObj) {
        queryString += `${startCase(dataKey)},`;
      }
    });
    queryString = queryString.slice(0, -1);
    queryString += '&';
  }
  if (!isEqual(formSizes, defaultSizes)) {
    queryString += 'size=';
    Object.keys(formSizes).forEach((dataKey) => {
      const dataObj = formSizes[dataKey];
      if (dataObj) {
        queryString += `${dataKey},`;

        if (isWomensFilterActive) {
          womensSizeChart[dataKey].forEach((size) => {
            queryString += `${size},`;
          });
        } else {
          mensSizeChart[dataKey].forEach((size) => {
            queryString += `${size},`;
          });
        }
      }
    });
  }
  queryString = queryString.slice(0, -1);

  return queryString;
};
