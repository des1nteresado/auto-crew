import React from 'react';
import PropTypes from 'prop-types';
import { Box, withStyles, Link, Drawer, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import CommonButton from 'common/components/CommonButton';
import { wpLinksConfig } from 'constants/links';
import { useRouteToGo } from 'helpers/hooks/useRouteToGo';
import ROUTES from 'routes';

import styles from './styles';

const MainMenu = ({ classes, isFilterMenuOpen, handleOpenMainMenu, handleOpenPage }) => {
  const goToCategories = useRouteToGo(ROUTES.CATEGORIES);
  const goToBrandsList = useRouteToGo(ROUTES.BRANDS_LIST);
  const goToFavorites = useRouteToGo(ROUTES.FAVORITES);

  return (
    <Drawer
      anchor="left"
      open={isFilterMenuOpen}
      classes={{ paper: classes.filtersMenu }}
      onClose={() => handleOpenMainMenu(false)}
    >
      <Box className={classes.menuWrapper}>
        <CommonButton
          className={classes.closeButton}
          startIcon={<CloseIcon />}
          label=""
          variant="text"
          size="large"
          onClick={() => handleOpenMainMenu(false)}
        />
        <CommonButton
          label="All Brands"
          variant="text"
          color="secondary"
          className={classes.pageButton}
          onClick={() => handleOpenPage(goToBrandsList)}
        />
        <CommonButton
          label="Categories"
          variant="text"
          color="secondary"
          className={classes.pageButton}
          onClick={() => handleOpenPage(goToCategories)}
        />
        <CommonButton
          label="Favorites"
          variant="text"
          color="secondary"
          className={classes.pageButton}
          onClick={() => handleOpenPage(goToFavorites)}
        />
      </Box>
      <Divider />
      <Box className={classes.menuWrapper}>
        {wpLinksConfig.map((page) => (
          <Link target="_blank" key={page.title} href={page.link}>
            <CommonButton label={page.title} variant="text" color="secondary" />
          </Link>
        ))}
      </Box>
    </Drawer>
  );
};

MainMenu.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleOpenMainMenu: PropTypes.func.isRequired,
  handleOpenPage: PropTypes.func.isRequired,
  isFilterMenuOpen: PropTypes.bool.isRequired,
};

export default React.memo(withStyles(styles)(MainMenu));
