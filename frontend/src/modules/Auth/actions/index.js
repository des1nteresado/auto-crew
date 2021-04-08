import { createAction } from 'redux-actions';

export const SIGN_IN = createAction('SIGN_IN_REQUEST');
export const SIGN_IN_SUCCESS = createAction('SIGN_IN_SUCCESS');
export const SIGN_IN_FAIL = createAction('SIGN_IN_FAIL');

export const SIGN_UP = createAction('SIGN_UP_REQUEST');
export const SIGN_UP_SUCCESS = createAction('SIGN_UP_SUCCESS');
export const SIGN_UP_FAIL = createAction('SIGN_UP_FAIL');

export const RESET_PASSWORD = createAction('RESET_PASSWORD_REQUEST');
export const RESET_PASSWORD_SUCCESS = createAction('RESET_PASSWORD_SUCCESS');
export const RESET_PASSWORD_FAIL = createAction('RESET_PASSWORD_FAIL');

export const CLEAR_ERRORS = createAction('CLEAR_ERRORS');
