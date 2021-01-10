import { handleActions } from 'redux-actions';

import * as actions from '../actions/index';

const defaultState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  newEmail: '',
  passwordForEmail: '',
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: '',
  isLoading: false,
  errors: '',
  successMessage: '',
};

const settings = handleActions(
  {
    [actions.GET_USER_INFO]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_USER_SUCCESS]: (state, { payload = {} }) => {
      const { firstName, lastName, email, phone } = payload.response;

      return {
        ...state,
        isLoading: false,
        firstName,
        lastName,
        phone,
        email,
      };
    },
    [actions.GET_USER_FAIL]: (state, { payload = {} }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
    [actions.UPDATE_USER_PROFILE]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.UPDATE_USER_PROFILE_SUCCESS]: (state, { payload = {} }) => {
      const { firstName, lastName, email, phone } = payload.response;

      return {
        ...state,
        isLoading: false,
        firstName,
        lastName,
        email,
        phone,
        successMessage: 'Success!',
      };
    },
    [actions.UPDATE_USER_PROFILE_FAIL]: (state, { payload = {} }) => {
      return {
        ...state,
        isLoading: false,
        errors: payload.response,
      };
    },
    [actions.CLEAR_SETTING_STATUS_MESSAGE]: (state) => ({
      ...state,
      errors: '',
      successMessage: '',
    }),
  },
  defaultState
);

export default settings;
