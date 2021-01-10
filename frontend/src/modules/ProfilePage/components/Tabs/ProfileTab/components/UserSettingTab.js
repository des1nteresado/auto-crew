import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import ChangePasswordBlock from '../../../ChangePasswordBlock';
import ChangeEmailBlock from '../../../ChangeEmailBlock';
import ChangeInfoBlock from '../../../ChangeInfoBlock';

import styles from './styles.js';
import Snack from '../../../../../../common/components/SnackBar';

const UserSettingsTab = ({
  classes,
  onChange,
  formValues,
  onSubmit,
  errors,
  handleStatusMessageClear,
  successMessage,
}) => {
  const [activeSettingsArea, setAreaActive] = useState('');

  const handleSetAreaActive = useCallback(
    (areaName) => {
      setAreaActive(areaName);
    },
    [setAreaActive]
  );

  const {
    firstName,
    lastName,
    phone,
    email,
    newEmail,
    passwordForEmail,
    currentPassword,
    newPassword,
    confirmNewPassword,
  } = formValues;

  return (
    <>
      <Grid
        container
        item
        alignItems="flex-start"
        xs={12}
        sm={10}
        className={classes.profileInfoContainer}
      >
        <ChangeInfoBlock
          firstName={firstName}
          lastName={lastName}
          phone={phone}
          onChange={onChange}
          activeSettingsArea={activeSettingsArea}
          setAreaActive={handleSetAreaActive}
          onSubmit={onSubmit}
        />
        <ChangeEmailBlock
          email={email}
          newEmail={newEmail}
          passwordForEmail={passwordForEmail}
          onChange={onChange}
          activeSettingsArea={activeSettingsArea}
          setAreaActive={handleSetAreaActive}
          onSubmit={onSubmit}
        />
        <ChangePasswordBlock
          password={currentPassword}
          newPassword={newPassword}
          confirmNewPassword={confirmNewPassword}
          onChange={onChange}
          email={email}
          activeSettingsArea={activeSettingsArea}
          setAreaActive={handleSetAreaActive}
          onSubmit={onSubmit}
        />
      </Grid>
      <Snack
        message={successMessage || errors}
        onHandleClose={handleStatusMessageClear}
        isSuccess={!!successMessage}
      />
    </>
  );
};
UserSettingsTab.defaultProps = {
  errors: '',
  successMessage: '',
  handleStatusMessageClear: () => {},
};

UserSettingsTab.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  formValues: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.string,
  successMessage: PropTypes.string,
  handleStatusMessageClear: PropTypes.func,
};

export default React.memo(withStyles(styles)(UserSettingsTab));
