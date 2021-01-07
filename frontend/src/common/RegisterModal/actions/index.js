import { createAction } from 'redux-actions';

export const SIGN_UP = createAction('SIGN_UP_REQUEST');
export const SIGN_UP_SUCCESS = createAction('SIGN_UP_SUCCESS');
export const SIGN_UP_FAIL = createAction('SIGN_UP_FAIL');
export const CLEAR_REGISTER_MESSAGE = createAction('CLEAR_REGISTER_ERRORS');
