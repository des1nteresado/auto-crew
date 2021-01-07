import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

const TabSwitcher = ({ tabs, baseUrl, param }) => {
  return (
    <Switch>
      {tabs.map((route) => {
        const { path, Component } = route;

        return (
          <Route
            path={`${baseUrl}${path}${param ? `/:${param}` : ''}`}
            render={(props) => <Component {...props} />}
            key={path}
          />
        );
      })}
    </Switch>
  );
};
TabSwitcher.defaultProps = {
  baseUrl: '/',
  param: '',
};

TabSwitcher.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  baseUrl: PropTypes.string,
  param: PropTypes.string,
};

export default React.memo(TabSwitcher);
