import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import CommonInput from 'common/components/CommonInput';
import { INVALID_PHONE } from 'constants/errorMessages';
import { validatePhone } from 'helpers/validations';
import { DEFAULT_INPUT_LENGTH } from 'constants/inputOptions';
import CommonButton from 'common/components/CommonButton';
import { SETTING_AREAS } from '../Tabs/ProfileTab/config';

import styles from './styles.js';

const ChangeInfoBlock = ({
  classes,
  onChange,
  firstName,
  lastName,
  phone,
  activeSettingsArea,
  setAreaActive,
  onSubmit,
}) => {
  return (
    <Grid
      container
      item
      sm={6}
      md={4}
      className={classes.changeInfoContainer}
      onBlur={() => setAreaActive('')}
      onFocus={() => setAreaActive(SETTING_AREAS.PERSONAL_INFO_AREA)}
    >
      <Grid item xs={12}>
        <Typography variant="h3" noWrap>
          Personal Information
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CommonInput
          value={firstName}
          onChange={onChange}
          name="firstName"
          label="First Name"
          inputProps={{
            maxLength: DEFAULT_INPUT_LENGTH,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <CommonInput
          value={lastName}
          onChange={onChange}
          name="lastName"
          label="Last Name"
          inputProps={{
            maxLength: DEFAULT_INPUT_LENGTH,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <CommonInput
          value={phone}
          onChange={onChange}
          name="phone"
          label="Phone"
          error={!validatePhone(phone)}
          helperText={INVALID_PHONE}
          inputProps={{
            maxLength: DEFAULT_INPUT_LENGTH,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        {activeSettingsArea === SETTING_AREAS.PERSONAL_INFO_AREA && (
          <CommonButton
            label="Save"
            variant="contained"
            isDisabled={!validatePhone(phone)}
            onMouseDown={() => onSubmit({ firstName, lastName, phone })}
          />
        )}
      </Grid>
    </Grid>
  );
};

ChangeInfoBlock.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  activeSettingsArea: PropTypes.string.isRequired,
  setAreaActive: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(ChangeInfoBlock));
