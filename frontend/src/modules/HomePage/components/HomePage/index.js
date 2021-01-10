import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import CommonLayoutContainer from 'common/layouts/CommonLayout/containers/CommonLayoutContainer';

import styles from './styles.js';

const HomePage = ({ classes, isLoading }) => {
  return <CommonLayoutContainer isLoading={false}>hello world</CommonLayoutContainer>;
};

HomePage.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default React.memo(withStyles(styles)(HomePage));
