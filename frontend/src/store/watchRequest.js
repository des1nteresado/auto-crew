import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { camelCase } from 'lodash';

import * as apiRequests from '../api/requests';
import { POSTFIXES, REQUEST_PENDING_DELAY } from '../constants/actionPostfixes';

const { REQUEST_POSTFIX, SUCCESS_POSTFIX, FAIL_POSTFIX } = POSTFIXES;

const createAction = (action, response, postfix) => {
  const { type, payload } = action;

  return {
    type: type.replace(REQUEST_POSTFIX, postfix),
    payload,
    response,
  };
};

function* sendRequest(action) {
  const { payload, type } = action;

  const apiMethodName = camelCase(type);
  const callMethod = apiRequests[apiMethodName];

  if (!callMethod) {
    throw new Error(`Api method for action ${action.type} doesn't exist!`);
  }

  try {
    const response = yield call(callMethod, payload);
    yield put(createAction(action, response, SUCCESS_POSTFIX));
  } catch (error) {
    yield put(createAction(action, error.response, FAIL_POSTFIX));
  }
}

function* requestEnded() {
  yield delay(REQUEST_PENDING_DELAY);
}

const isRequestAction = (action) => action.type.endsWith(REQUEST_POSTFIX);

const isRequestEndedAction = (action) =>
  action.type.endsWith(SUCCESS_POSTFIX) || action.type.endsWith(FAIL_POSTFIX);

function* watchRequest() {
  yield takeEvery(isRequestAction, sendRequest);
  yield takeEvery(isRequestEndedAction, requestEnded);
}

export default watchRequest;
