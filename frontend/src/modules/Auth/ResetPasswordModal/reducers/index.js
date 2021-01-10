import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const defaultState = {
  isLoading: false,
  messages: '',
  isSuccess: false,
};

const resetPasswordReducer = handleActions(
  {
    [actions.RESET_PASSWORD]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.RESET_PASSWORD_SUCCESS]: (state) => ({
      ...state,
      isLoading: false,
      messages: 'New password was successfully sent to specified email',
      isSuccess: true,
    }),
    [actions.RESET_PASSWORD_FAIL]: (state, { payload = {} }) => ({
      ...state,
      isLoading: false,
      messages: payload.response,
      isSuccess: false,
    }),
    [actions.CLEAR_RESET_PASSWORD_RESPONSE_MESSAGES]: (state) => ({
      ...state,
      messages: '',
    }),
  },
  defaultState
);

export default resetPasswordReducer;
