import { handleActions } from 'redux-actions';

import * as actions from '../actions/index';

const defaultState = {
  isLoading: false,
  success: false,
  message: '',
};

const register = handleActions(
  {
    [actions.SIGN_UP]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.SIGN_UP_SUCCESS]: (state) => ({
      ...state,
      isLoading: false,
      success: true,
      message: 'Your Account has been created!',
    }),
    [actions.SIGN_UP_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      success: false,
      message: payload && payload.response,
    }),
    [actions.CLEAR_REGISTER_MESSAGE]: (state) => ({
      ...state,
      message: null,
    }),
  },
  defaultState
);

export default register;
