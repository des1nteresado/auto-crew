import { handleActions } from 'redux-actions';

import * as actions from '../actions/index';
import { UPDATE_USER_PROFILE_SUCCESS } from '../../../modules/ProfilePage/components/Tabs/ProfileTab/actions';

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
  },
  defaultState
);

export default userReducer;
