import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import CommonButton from 'commonComponents/CommonButton';

import styles from './styles';

const CommonCarousel = ({
  title,
  classes,
  children,
  withViewAllButton,
  viewAllClickHandler,
  style,
}) => {
  return (
    <Box className={clsx(classes.carouselContainer, style && style)}>
      <Box className={classes.carouselHeader}>
        {title && (
          <Typography className={classes.title} variant="h3">
            {title}
          </Typography>
        )}
        {withViewAllButton && (
          <CommonButton
            endIcon={<ArrowForwardIosRoundedIcon />}
            variant="text"
            label="View All"
            size="small"
            className={classes.viewAll}
            onClick={viewAllClickHandler}
          />
        )}
      </Box>
      <Box className={classes.carousel}>{children}</Box>
    </Box>
  );
};

CommonCarousel.defaultProps = {
  title: '',
  style: '',
  withViewAllButton: false,
  viewAllClickHandler: () => {},
};

CommonCarousel.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  viewAllClickHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
  withViewAllButton: PropTypes.bool,
  title: PropTypes.string,
  style: PropTypes.string,
};

export default React.memo(withStyles(styles)(CommonCarousel));
