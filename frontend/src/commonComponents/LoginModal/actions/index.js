import { createAction } from 'redux-actions';

export const LOGIN = createAction('LOGIN_REQUEST');
export const LOGIN_SUCCESS = createAction('LOGIN_SUCCESS');
export const LOGIN_FAIL = createAction('LOGIN_FAIL');

export const CLEAR_ERRORS = createAction('CLEAR_ERRORS');
