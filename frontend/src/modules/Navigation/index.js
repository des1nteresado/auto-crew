import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import ROUTES from 'modules/Navigation/routes';
import PrivateRoute from 'common/components/PrivateRoute';
import HomePageContainer from 'modules/HomePage/containers/HomePageContainer';
import ProfilePageContainer from 'modules/ProfilePage/containers/ProfilePageContainer';
import { CHECK_AUTH_STATUS } from 'helpers/authenticationWatcher/authActions';
import { CommonContextProvider } from 'common/contexts/CommonContext';

const styles = (theme) => ({
  navigationContainer: {
    background: theme.palette.white,
    height: '1px',
    minHeight: '100vh',
  },
});

const Navigation = ({ classes }) => {
  const dispatch = useDispatch();
  const { isAuth, token } = useSelector((state) => state.user);

  dispatch(CHECK_AUTH_STATUS({ isAuth, token }));

  return (
    <CommonContextProvider>
      <Box className={classes.navigationContainer}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePageContainer} />
          <PrivateRoute path={ROUTES.PROFILE} component={ProfilePageContainer} />
          <Redirect from="*" to="/" />
        </Switch>
      </Box>
    </CommonContextProvider>
  );
};

Navigation.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withStyles(styles)(Navigation);
