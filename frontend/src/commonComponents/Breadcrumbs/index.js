import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs as MaterialBreadcrumbs, Link, withStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { startCase } from 'lodash';

import ROUTES from 'routes';

import styles from './styles.js';

const Breadcrumbs = ({ children, classes }) => {
  const { filterByPeopleCategory } = useSelector((state) => state.global);

  return (
    <MaterialBreadcrumbs className={classes.breadcrumbs} separator="&#8226;">
      <Link color="textPrimary" href={ROUTES.HOME}>
        {startCase(filterByPeopleCategory)}
      </Link>
      {children}
    </MaterialBreadcrumbs>
  );
};
Breadcrumbs.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.node.isRequired,
};

export default React.memo(withStyles(styles)(Breadcrumbs));
