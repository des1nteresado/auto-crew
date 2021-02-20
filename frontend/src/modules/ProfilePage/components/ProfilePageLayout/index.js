import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Grid, Typography, withStyles } from '@material-ui/core';

import ROUTES from 'modules/Navigation/routes';
import TabSwitcher from 'common/components/TabSwitcher';
import CommonLayout from 'common/layouts/CommonLayout';
import { TAB_ROUTES } from '../../config';

import styles from './styles';

const ProfilePageLayout = ({ classes }) => {
  return (
    <CommonLayout>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={2} className={classes.navigation}>
          {TAB_ROUTES.map((route) => (
            <NavLink
              to={`${ROUTES.PROFILE}${route.path}`}
              key={route.path}
              activeClassName={classes.activeTab}
            >
              <Typography variant="h3" color="textPrimary">
                {route.title}
              </Typography>
            </NavLink>
          ))}
        </Grid>
        <TabSwitcher baseUrl={ROUTES.PROFILE} tabs={TAB_ROUTES} />
      </Grid>
    </CommonLayout>
  );
};

ProfilePageLayout.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withStyles(styles)(ProfilePageLayout);
