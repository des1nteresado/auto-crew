import { handleActions, combineActions } from 'redux-actions';

import * as actions from '../actions/index';

const defaultState = {
  foundProductsByQuery: [],
  foundProductsByCategories: [],
  isLoginModalShowed: false,
  isLoadingData: true,
  errors: null,
};

const commonLayoutReducer = handleActions(
  {
    [combineActions(actions.GET_PRODUCTS_BY_QUERY, actions.GET_PRODUCTS_BY_CATEGORIES)](state) {
      return {
        ...state,
        isLoadingData: true,
      };
    },
    [actions.GET_PRODUCTS_BY_QUERY_SUCCESS]: (state, { payload = {} }) => {
      return {
        ...state,
        foundProductsByQuery: payload.response.data,
        isLoadingData: false,
        errors: null,
      };
    },
    [actions.GET_PRODUCTS_BY_CATEGORIES_SUCCESS]: (state, { payload = {} }) => {
      return {
        ...state,
        foundProductsByCategories: payload.response.data,
        isLoadingData: false,
        errors: null,
      };
    },
    [actions.SET_LOGIN_MODAL_SHOWED]: (state, { payload }) => {
      return {
        ...state,
        isLoginModalShowed: payload,
        isLoadingData: false,
        errors: null,
      };
    },
    [combineActions(actions.GET_PRODUCTS_BY_QUERY_FAIL, actions.GET_PRODUCTS_BY_CATEGORIES_FAIL)]: (
      state,
      { payload = {} }
    ) => ({
      ...state,
      isLoadingData: false,
      errors: payload.response,
    }),
  },
  defaultState
);

export default commonLayoutReducer;
