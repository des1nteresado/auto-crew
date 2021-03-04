import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import ROUTES from 'modules/Navigation/routes';
import { USER_ROLES } from 'constants/userRoles';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { role } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={({ location, ...otherProps }) =>
        roles.includes(role) ? (
          <Component {...otherProps} />
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.HOME,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.defaultProps = {
  roles: Object.keys(USER_ROLES).map((roleKey) => USER_ROLES[roleKey]),
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object]).isRequired,
  roles: PropTypes.oneOfType([PropTypes.array]),
};

export default PrivateRoute;
