import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CommonLayout from 'common/layouts/CommonLayout';

import styles from './styles.js';

const HomePage = ({ classes, isLoading }) => {
  const { info, isAuth } = useSelector((state) => state.user);

  return (
    <CommonLayout isLoading={isLoading}>
      {isAuth ? `hello ${info.email}` : `hello world!`}
    </CommonLayout>
  );
};

HomePage.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default React.memo(withStyles(styles)(HomePage));
