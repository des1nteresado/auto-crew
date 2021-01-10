import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';

import apiCallsSaga from '../helpers/watchRequest';
import { authSaga } from '../helpers/authenticationWatcher/checkAuthSaga';

function* rootSaga() {
  yield all([
    authSaga(),
    apiCallsSaga(),
  ]);
}

export default rootSaga;
