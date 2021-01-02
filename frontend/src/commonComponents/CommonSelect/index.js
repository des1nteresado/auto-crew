import React from 'react';
import PropTypes from 'prop-types';
import { v1 as uuid } from 'uuid';
import { MenuItem } from '@material-ui/core';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

import CommonInput from 'commonComponents/CommonInput';

const CommonSelect = ({ value, onChange, items, ...otherProps }) => {
  return (
    <CommonInput
      value={value}
      select
      SelectProps={{ IconComponent: ExpandMoreRoundedIcon }}
      onChange={onChange}
      {...otherProps}
    >
      {items.map((item) => (
        <MenuItem key={uuid()} value={item.value || item}>
          {item.label || item}
        </MenuItem>
      ))}
    </CommonInput>
  );
};

CommonSelect.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default React.memo(CommonSelect);
