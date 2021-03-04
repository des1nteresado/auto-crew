import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserSettingsTab from '../components/UserSettingTab';
import { CLEAR_SETTING_STATUS_MESSAGE, GET_USER_INFO, UPDATE_USER_PROFILE } from '../actions';

const UserSettingsTabContainer = () => {
  const { _id } = useSelector((state) => state.user);
  const { firstName, lastName, phone, email, errors, successMessage } = useSelector(
    (state) => state.profileSettings
  );

  const dispatch = useDispatch();

  const initialState = useMemo(
    () => ({
      firstName,
      lastName,
      phone,
      email,
      newEmail: '',
      passwordForEmail: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    }),
    [firstName, lastName, phone, email]
  );

  const [formValues, setValues] = useState(initialState);

  useEffect(() => {
    dispatch(GET_USER_INFO(_id));
  }, [dispatch, _id]);

  useEffect(() => {
    setValues((formState) => ({
      ...formState,
      firstName,
      lastName,
      phone,
      email,
    }));
  }, [initialState]);

  const handleFieldChange = useCallback(
    (event) => {
      setValues({
        ...formValues,
        [event.target.name]: event.target.value,
      });
    },
    [formValues]
  );

  const handleSubmit = useCallback(
    (fields) => {
      dispatch(UPDATE_USER_PROFILE({ ...fields, userId: _id }));
    },
    [dispatch, _id]
  );

  const handleStatusMessageClear = useCallback(() => {
    dispatch(CLEAR_SETTING_STATUS_MESSAGE());
  }, [dispatch]);

  return (
    <UserSettingsTab
      formValues={formValues}
      onChange={handleFieldChange}
      onSubmit={handleSubmit}
      errors={errors}
      successMessage={successMessage}
      handleStatusMessageClear={handleStatusMessageClear}
    />
  );
};

export default React.memo(UserSettingsTabContainer);
