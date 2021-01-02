import { handleActions, combineActions } from 'redux-actions';

import {
  GET_LANDING_CONFIG,
  GET_LANDING_CONFIG_SUCCESS,
  GET_LANDING_CONFIG_FAIL,
} from 'config/globalActions';
import * as actions from '../actions/index';

const defaultState = {
  config: [],
  companies: [],
  errors: '',
  isLoading: false,
};

const homePageReducer = handleActions(
  {
    [combineActions(GET_LANDING_CONFIG, actions.GET_ACTIVE_COMPANIES_BY_GENDER)](state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [actions.GET_ACTIVE_COMPANIES_BY_GENDER_SUCCESS]: (state, { payload = {} }) => {
      return {
        ...state,
        companies: payload.response.companies,
        isLoading: false,
        errors: null,
      };
    },
    [GET_LANDING_CONFIG_SUCCESS]: (state, { payload = [] }) => ({
      ...state,
      config: payload.response,
      isLoading: false,
    }),
    [combineActions(GET_LANDING_CONFIG_FAIL, actions.GET_ACTIVE_COMPANIES_BY_GENDER_FAIL)](
      state,
      { payload }
    ) {
      return {
        ...state,
        errors: payload.response,
        isLoading: false,
      };
    },
  },
  defaultState
);

export default homePageReducer;
