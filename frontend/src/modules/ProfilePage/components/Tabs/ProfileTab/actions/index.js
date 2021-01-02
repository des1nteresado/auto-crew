import { createAction } from 'redux-actions';

export const GET_USER_INFO = createAction('GET_USER_INFO_REQUEST');
export const GET_USER_SUCCESS = createAction('GET_USER_INFO_SUCCESS');
export const GET_USER_FAIL = createAction('GET_USER_INFO_FAIL');

export const UPDATE_USER_PROFILE = createAction('UPDATE_USER_PROFILE_REQUEST');
export const UPDATE_USER_PROFILE_SUCCESS = createAction('UPDATE_USER_PROFILE_SUCCESS');
export const UPDATE_USER_PROFILE_FAIL = createAction('UPDATE_USER_PROFILE_FAIL');

export const CLEAR_SETTING_STATUS_MESSAGE = createAction('CLEAR_SETTING_ERRORS');
