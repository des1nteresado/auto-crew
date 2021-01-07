import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { v1 as uuid } from 'uuid';
import { Box, Typography, withStyles } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import styles from './styles';

const MobileCategory = ({ classes, footerCategory }) => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Box className={classes.category}>
      <Box className={classes.title} onClick={handleClick}>
        <Typography variant="h4">{footerCategory.title}</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {footerCategory.categories.map((category) => (
          <Typography key={uuid()} variant="body2" color="textPrimary" className={classes.subTitle}>
            {category}
          </Typography>
        ))}
      </Collapse>
    </Box>
  );
};

MobileCategory.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  footerCategory: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default React.memo(withStyles(styles)(MobileCategory));
