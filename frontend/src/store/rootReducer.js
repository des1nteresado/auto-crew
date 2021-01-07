import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import register from '../common/RegisterModal/reducers';
import user from '../common/LoginModal/reducers';
import commonLayout from '../common/layouts/CommonLayout/reducers';

import settings from '../modules/ProfilePage/components/Tabs/ProfileTab/reducers';
import resetPassword from '../common/ResetPasswordModal/reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistUserConfig = {
  key: 'user',
  storage,
};

const rootReducer = combineReducers({
  register,
  user: persistReducer(persistUserConfig, user),
  resetPassword,
  commonLayout,
  settings,
});

export default persistReducer(persistConfig, rootReducer);
