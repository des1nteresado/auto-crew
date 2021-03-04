import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs as MaterialBreadcrumbs, Link, withStyles } from '@material-ui/core';

import ROUTES from 'modules/Navigation/routes';

import styles from './styles.js';

const Breadcrumbs = ({ children, classes }) => {
  return (
    <MaterialBreadcrumbs className={classes.breadcrumbs} separator="&#8226;">
      <Link color="textPrimary" href={ROUTES.HOME}>
        Home
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
