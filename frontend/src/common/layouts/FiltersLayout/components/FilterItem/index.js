import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box, Typography, Collapse, withStyles } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

import styles from './styles';

const FilterItem = ({ classes, children, title, style, isOpen }) => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Box className={classes.filterContainer}>
      <Box className={classes.filter} onClick={handleClick}>
        <Typography variant="body1" color="textSecondary">
          {title}
        </Typography>
        {open ? <Remove /> : <Add />}
      </Box>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        className={clsx(classes.filterChildren, style && style)}
      >
        {children}
      </Collapse>
    </Box>
  );
};

FilterItem.defaultProps = {
  style: '',
  isOpen: false,
};

FilterItem.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default React.memo(withStyles(styles)(FilterItem));
