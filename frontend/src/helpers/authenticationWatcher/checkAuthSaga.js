import axios from 'axios';
import { put, takeEvery, all } from 'redux-saga/effects';

import * as authActions from './authActions';
import api from '../../api/config';

function* checkAuthSagaWorker(action) {
  const { isAuth, token } = action.payload;

  if (isAuth && token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    yield put(authActions.CHECK_AUTH_STATUS_SUCCESS());
  } else {
    yield put(authActions.CHECK_AUTH_STATUS_FAIL());
  }
}

function* checkAuthSagaWatcher() {
  yield takeEvery(authActions.CHECK_AUTH_STATUS, checkAuthSagaWorker);
}

function* logoutSagaWorker() {
  yield localStorage.removeItem('persist:user');
}

function* logoutSagaWatcher() {
  yield takeEvery(authActions.CHECK_AUTH_STATUS_FAIL, logoutSagaWorker);
}

export function* authSaga() {
  yield all([checkAuthSagaWatcher(), logoutSagaWatcher()]);
}
