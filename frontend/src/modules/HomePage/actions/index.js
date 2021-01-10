import { createAction } from 'redux-actions';

export const GET_ACTIVE_COMPANIES_BY_GENDER = createAction(
  'GET_ACTIVE_COMPANIES_BY_GENDER_REQUEST'
);
export const GET_ACTIVE_COMPANIES_BY_GENDER_SUCCESS = createAction(
  'GET_ACTIVE_COMPANIES_BY_GENDER_SUCCESS'
);
export const GET_ACTIVE_COMPANIES_BY_GENDER_FAIL = createAction(
  'GET_ACTIVE_COMPANIES_BY_GENDER_FAIL'
);
