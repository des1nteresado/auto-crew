import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import register from '../modules/Auth/RegisterModal/reducers';
import user from '../modules/Auth/LoginModal/reducers';
import commonLayout from '../common/layouts/CommonLayout/reducers';

import settings from '../modules/ProfilePage/components/Tabs/ProfileTab/reducers';
import resetPassword from '../modules/Auth/ResetPasswordModal/reducers';

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
