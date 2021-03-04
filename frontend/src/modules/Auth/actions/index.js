import { createAction } from 'redux-actions';

export const LOGIN = createAction('LOGIN_REQUEST');
export const LOGIN_SUCCESS = createAction('LOGIN_SUCCESS');
export const LOGIN_FAIL = createAction('LOGIN_FAIL');

export const SIGN_UP = createAction('SIGN_UP_REQUEST');
export const SIGN_UP_SUCCESS = createAction('SIGN_UP_SUCCESS');
export const SIGN_UP_FAIL = createAction('SIGN_UP_FAIL');
export const CLEAR_REGISTER_MESSAGE = createAction('CLEAR_REGISTER_ERRORS');

export const RESET_PASSWORD = createAction('RESET_PASSWORD_REQUEST');
export const RESET_PASSWORD_SUCCESS = createAction('RESET_PASSWORD_SUCCESS');
export const RESET_PASSWORD_FAIL = createAction('RESET_PASSWORD_FAIL');

export const CLEAR_RESET_PASSWORD_RESPONSE_MESSAGES = createAction(
  'CLEAR_RESET_PASSWORD_RESPONSE_MESSAGES'
);

export const CLEAR_ERRORS = createAction('CLEAR_ERRORS');
