import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Box, Link, withStyles } from '@material-ui/core';

import styles from './styles';

const SocialBox = ({ classes, onClick, style, socialNetworks }) => {
  return (
    <Box className={clsx(classes.socialBox, style && style)}>
      {socialNetworks &&
        socialNetworks.map((network) => (
          <Link key={network.name} href={network.link}>
            <Box onClick={onClick} className={classes[`${network.name}`]} />
          </Link>
        ))}
    </Box>
  );
};

SocialBox.defaultProps = {
  style: '',
  socialNetworks: [],
  onClick: () => {},
};

SocialBox.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  socialNetworks: PropTypes.oneOfType([PropTypes.array]),
  style: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(withStyles(styles)(SocialBox));
