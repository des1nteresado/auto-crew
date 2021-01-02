import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { DEFAULT_INPUT_LENGTH } from 'constants/inputOptions.js';
import CommonInput from 'commonComponents/CommonInput';
import CommonButton from '../../../../commonComponents/CommonButton';
import { SETTING_AREAS } from '../Tabs/ProfileTab/config';
import { profileSettingsValidator } from '../Tabs/validators/profileFormValidators';

import styles from './styles.js';

const ChangeEmailBlock = ({
  classes,
  onChange,
  email,
  newEmail,
  passwordForEmail,
  activeSettingsArea,
  setAreaActive,
  onSubmit,
}) => {
  const { errors, isValid } = useMemo(
    () => profileSettingsValidator({ newEmail, password: passwordForEmail }),
    [newEmail, passwordForEmail]
  );

  return (
    <Grid
      container
      item
      alignItems="flex-start"
      sm={6}
      md={4}
      className={classes.changeEmailContainer}
      onBlur={() => setAreaActive('')}
      onFocus={() => setAreaActive(SETTING_AREAS.EMAIL_AREA)}
    >
      <Grid item xs={12}>
        <Typography variant="h3" noWrap>
          Email Address
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CommonInput disabled value={email} name="email" label="Current Email Address" />
      </Grid>
      <Grid item xs={12}>
        <CommonInput
          value={newEmail}
          type="email"
          onChange={onChange}
          name="newEmail"
          label="New Email Address"
          error={newEmail !== '' && !!errors.newEmail}
          inputProps={{
            maxLength: DEFAULT_INPUT_LENGTH,
          }}
          helperText={errors.newEmail}
        />
      </Grid>
      <Grid item xs={12}>
        <CommonInput
          value={passwordForEmail}
          onChange={onChange}
          type="password"
          name="passwordForEmail"
          label="Current Password"
          error={!!errors.password}
          helperText={errors.password}
        />
      </Grid>
      {activeSettingsArea === SETTING_AREAS.EMAIL_AREA && (
        <Grid item xs={12}>
          <CommonButton
            isDisabled={!isValid}
            label="Save"
            variant="contained"
            onMouseDown={() => onSubmit({ email, newEmail, currentPassword: passwordForEmail })}
          />
        </Grid>
      )}
    </Grid>
  );
};

ChangeEmailBlock.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  email: PropTypes.string.isRequired,
  newEmail: PropTypes.string.isRequired,
  passwordForEmail: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  activeSettingsArea: PropTypes.string.isRequired,
  setAreaActive: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(ChangeEmailBlock));
