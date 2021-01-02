import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, withStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import CommonButton from 'commonComponents/CommonButton';
import { ReactComponent as FiltersIcon } from 'static/images/filters.svg';

import styles from './styles.js';

const MobileBreadcrumbs = ({ classes, currentPage, withFilterButton, onClickHandler }) => {
  const history = useHistory();

  return (
    <Box className={classes.breadcrumbContainer}>
      <CommonButton
        startIcon={<ArrowBackIosRoundedIcon />}
        variant="text"
        label="Back"
        size="small"
        className={classes.viewAll}
        onClick={history.goBack}
      />
      <Typography className={classes.currentPage}>{currentPage}</Typography>
      {withFilterButton ? (
        <CommonButton
          endIcon={<FiltersIcon />}
          variant="text"
          label="Filter"
          size="small"
          className={classes.viewAll}
          onClick={onClickHandler}
        />
      ) : (
        <Box className={classes.emptyStub} />
      )}
    </Box>
  );
};

MobileBreadcrumbs.defaultProps = {
  withFilterButton: false,
  onClickHandler: () => {},
};

MobileBreadcrumbs.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  currentPage: PropTypes.string.isRequired,
  withFilterButton: PropTypes.bool,
  onClickHandler: PropTypes.func,
};

export default React.memo(withStyles(styles)(MobileBreadcrumbs));
