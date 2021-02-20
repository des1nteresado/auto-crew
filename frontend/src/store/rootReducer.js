import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from '../modules/Auth/reducers';
import profileSettings from '../modules/ProfilePage/components/Tabs/ProfileTab/reducers';

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
  user: persistReducer(persistUserConfig, user),
  profileSettings,
});

export default persistReducer(persistConfig, rootReducer);
