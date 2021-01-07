import { createAction } from 'redux-actions';

export const RESET_PASSWORD = createAction('RESET_PASSWORD_REQUEST');
export const RESET_PASSWORD_SUCCESS = createAction('RESET_PASSWORD_SUCCESS');
export const RESET_PASSWORD_FAIL = createAction('RESET_PASSWORD_FAIL');

export const CLEAR_RESET_PASSWORD_RESPONSE_MESSAGES = createAction(
  'CLEAR_RESET_PASSWORD_RESPONSE_MESSAGES'
);
