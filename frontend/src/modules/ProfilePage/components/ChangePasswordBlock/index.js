import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { INVALID_BASE_INPUT, INVALID_PASSWORD_CONFIRM } from 'constants/errorMessages';
import CommonInput from 'common/components/CommonInput';
import CommonButton from '../../../../common/components/CommonButton';
import { SETTING_AREAS } from '../Tabs/ProfileTab/config';
import {
  validateConfirmPassword,
  validatePassword,
  validateBaseInput,
  getPasswordError,
} from '../../../Auth/helpers/validations';

import styles from './styles.js';

const ChangePasswordBlock = ({
  classes,
  onChange,
  newPassword,
  email,
  confirmNewPassword,
  password,
  activeSettingsArea,
  setAreaActive,
  onSubmit,
}) => {
  const isPasswordValid = useMemo(() => validatePassword(newPassword), [newPassword]);
  const isPasswordsConfirmed = useMemo(() => {
    return validateConfirmPassword(newPassword, confirmNewPassword);
  }, [newPassword, confirmNewPassword]);
  const isCurrentPasswordFilledIn = useMemo(() => validateBaseInput(password), [password]);

  return (
    <Grid
      container
      item
      alignItems="flex-start"
      sm={6}
      md={4}
      className={classes.changePasswordContainer}
      onBlur={() => setAreaActive('')}
      onFocus={() => setAreaActive(SETTING_AREAS.PASSWORD_AREA)}
    >
      <Grid item xs={12}>
        <Typography variant="h3">Password</Typography>
      </Grid>
      <Grid item xs={12}>
        <CommonInput
          value={password}
          onChange={onChange}
          type="password"
          name="currentPassword"
          label="Current Password"
          error={!isCurrentPasswordFilledIn}
          helperText={INVALID_BASE_INPUT}
        />
      </Grid>
      <Grid item xs={12}>
        <CommonInput
          value={newPassword}
          onChange={onChange}
          type="password"
          name="newPassword"
          label="New Password"
          error={newPassword != '' && !isPasswordValid}
          helperText={getPasswordError(newPassword)}
        />
      </Grid>
      <Grid item xs={12}>
        <CommonInput
          value={confirmNewPassword}
          onChange={onChange}
          type="password"
          name="confirmNewPassword"
          label="Confirm New Password"
          error={confirmNewPassword !== '' && !isPasswordsConfirmed}
          helperText={INVALID_PASSWORD_CONFIRM}
        />
      </Grid>

      {activeSettingsArea === SETTING_AREAS.PASSWORD_AREA && (
        <Grid item xs={12}>
          <CommonButton
            isDisabled={!isPasswordValid || !isPasswordsConfirmed || !isCurrentPasswordFilledIn}
            label="Save"
            variant="contained"
            onMouseDown={() => onSubmit({ newPassword, currentPassword: password, email })}
          />
        </Grid>
      )}
    </Grid>
  );
};

ChangePasswordBlock.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  newPassword: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  confirmNewPassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  activeSettingsArea: PropTypes.string.isRequired,
  setAreaActive: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(ChangePasswordBlock));
