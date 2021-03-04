import { handleActions } from 'redux-actions';

import { UPDATE_USER_PROFILE_SUCCESS } from 'modules/ProfilePage/components/Tabs/ProfileTab/actions';
import * as actions from '../actions/index';

const defaultState = {
  _id: null,
  orders: [],
  follows: [],
  email: null,
  firstName: '',
  lastName: '',
  role: '',
  isLoading: false,
  token: '',
  isAuth: false,
  errors: '',
  isSuccess: false,
  message: '',
};

const userReducer = handleActions(
  {
    [actions.LOGIN]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.LOGIN_SUCCESS]: (state, { payload }) => {
      if (payload && payload.response && payload.response.user) {
        const { token, user } = payload.response;
        const { _id, orders, email, firstName, lastName, role, follows } = user;

        return {
          ...state,
          isLoading: false,
          _id,
          orders,
          follows,
          email,
          firstName,
          lastName,
          role,
          token,
          isAuth: true,
          errors: null,
        };
      }

      return defaultState;
    },
    [actions.LOGIN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      isAuth: false,
      errors: payload && payload.response,
    }),
    [actions.CLEAR_ERRORS]: (state) => ({
      ...state,
      errors: '',
    }),
    [UPDATE_USER_PROFILE_SUCCESS]: (state, { payload = {} }) => {
      const { firstName, lastName, email, follows } = payload.response;

      return {
        ...state,
        firstName,
        lastName,
        email,
        follows,
      };
    },
    [actions.SIGN_UP]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.SIGN_UP_SUCCESS]: (state) => ({
      ...state,
      isLoading: false,
      isSuccess: true,
      message: 'Your Account has been created!',
    }),
    [actions.SIGN_UP_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      isSuccess: false,
      message: payload && payload.response,
    }),
    [actions.RESET_PASSWORD]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.RESET_PASSWORD_SUCCESS]: (state) => ({
      ...state,
      isLoading: false,
      message: 'New password was successfully sent to specified email',
      isSuccess: true,
    }),
    [actions.RESET_PASSWORD_FAIL]: (state, { payload = {} }) => ({
      ...state,
      isLoading: false,
      message: payload.response,
      isSuccess: false,
    }),
    [actions.CLEAR_RESET_PASSWORD_RESPONSE_MESSAGES]: (state) => ({
      ...state,
      message: '',
    }),
    [actions.CLEAR_REGISTER_MESSAGE]: (state) => ({
      ...state,
      message: null,
    }),
  },
  defaultState
);

export default userReducer;
