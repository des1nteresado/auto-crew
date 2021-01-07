import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Pagination as Paginator, PaginationItem } from '@material-ui/lab';

import styles from './styles';

const Pagination = ({ classes, onChange, currentPage, pageCount }) => {
  return (
    <Paginator
      count={pageCount}
      shape="rounded"
      size="large"
      page={currentPage}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          classes={{
            root: classes.paginationItem,
            rounded: classes.paginationRoundedItem,
            selected: classes.selectedPaginationItem,
          }}
        />
      )}
      onChange={(event, value) => onChange(value)}
    />
  );
};

Pagination.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(withStyles(styles)(Pagination));
