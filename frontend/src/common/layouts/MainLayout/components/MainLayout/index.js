import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import ROUTES from 'routes';
import PrivateRoute from 'common/components/PrivateRoute';
import HomePageContainer from 'modules/HomePage/containers/HomePageContainer';
import ProfilePageContainer from 'modules/ProfilePage/containers/ProfilePageContainer';
import { CHECK_AUTH_STATUS } from 'helpers/authenticationWatcher/authActions';

import styles from './styles';

const MainLayout = ({ classes }) => {
  const dispatch = useDispatch();
  const { isAuth, token } = useSelector((state) => state.user);

  dispatch(CHECK_AUTH_STATUS({ isAuth, token }));

  return (
    <Box className={classes.mainLayoutContainer}>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePageContainer} />
        <PrivateRoute path={ROUTES.PROFILE} component={ProfilePageContainer} />
        <Redirect from="*" to="/" />
      </Switch>
    </Box>
  );
};

MainLayout.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withStyles(styles)(MainLayout);
