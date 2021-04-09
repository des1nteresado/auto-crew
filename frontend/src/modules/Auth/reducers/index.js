import { combineActions, handleActions } from 'redux-actions';
import * as actions from '../actions/index';

const defaultState = {
  info: {
    _id: '',
    email: '',
    token: '',
    firstName: '',
    lastName: '',
    role: '',
  },
  isLoading: false,
  isAuth: false,
  isSuccess: false,
  message: '',
};

const userReducer = handleActions(
  {
    [combineActions(actions.SIGN_IN, actions.SIGN_UP, actions.RESET_PASSWORD)](state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [actions.SIGN_IN_SUCCESS]: (state, { response }) => {
      const { token, user } = response.data;
      const { _id, email, firstName = '', lastName = '', role } = user;

      return {
        ...state,
        info: {
          _id,
          email,
          firstName,
          lastName,
          role,
          token,
        },
        isLoading: false,
        isSuccess: true,
        isAuth: true,
      };
    },
    [actions.SIGN_UP_SUCCESS]: (state) => ({
      ...state,
      isLoading: false,
      isSuccess: true,
      message: 'Your Account has been created!',
    }),
    [actions.RESET_PASSWORD_SUCCESS]: (state) => ({
      ...state,
      isLoading: false,
      message: 'New password was successfully sent to specified email',
      isSuccess: true,
    }),
    [combineActions(actions.SIGN_IN_FAIL, actions.SIGN_UP_FAIL, actions.RESET_PASSWORD_FAIL)](
      state,
      { response }
    ) {
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        message: response?.data?.message,
      };
    },
    [actions.CLEAR_ERRORS]: (state) => ({
      ...state,
      message: '',
    }),
  },
  defaultState
);

export default userReducer;
