import * as homeActions from 'modules/HomePage/actions/index';
import * as homeAPI from 'modules/HomePage/api/index';

import * as registerAction from '../commonComponents/RegisterModal/actions/index';
import * as registerAPI from '../commonComponents/RegisterModal/api/index';

import * as commonLayoutActions from '../commonComponents/layouts/CommonLayout/actions/index';
import * as commonLayoutAPI from '../commonComponents/layouts/CommonLayout/api/index';

import * as loginActions from '../commonComponents/LoginModal/actions/index';
import * as loginAPI from '../commonComponents/LoginModal/api/index';

import * as userActions from '../modules/ProfilePage/components/Tabs/ProfileTab/actions';
import * as userAPI from '../modules/ProfilePage/components/Tabs/ProfileTab/api';
import * as resetPasswordActions from '../commonComponents/ResetPasswordModal/actions';
import * as resetPasswordApi from '../commonComponents/ResetPasswordModal/api';

// @ TODO: update routing (tokenization example)

const apiCallsMapping = (action) => {
  const mapping = {
    [registerAction.SIGN_UP]: registerAPI.signUp,
    [loginActions.LOGIN]: loginAPI.signIn,

    [commonLayoutActions.GET_PRODUCTS_BY_QUERY]: commonLayoutAPI.getProductsByQuery,
    [commonLayoutActions.GET_PRODUCTS_BY_CATEGORIES]: commonLayoutAPI.getProductsByCategories,

    [homeActions.GET_ACTIVE_COMPANIES_BY_GENDER]: homeAPI.getActiveCompaniesByGender,

    [userActions.GET_USER_INFO]: userAPI.getUserInformation,
    [userActions.UPDATE_USER_PROFILE]: userAPI.updateUserProfile,
    [resetPasswordActions.RESET_PASSWORD]: resetPasswordApi.resetPassword,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw 'Not mapped action';
  }

  return mapping[action.type];
};

export default apiCallsMapping;
