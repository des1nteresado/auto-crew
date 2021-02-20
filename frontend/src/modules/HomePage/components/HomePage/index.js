import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import CommonLayout from 'common/layouts/CommonLayout';

import styles from './styles.js';

const HomePage = ({ classes, isLoading }) => {
  return <CommonLayout isLoading={isLoading}>hello world</CommonLayout>;
};

HomePage.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default React.memo(withStyles(styles)(HomePage));
