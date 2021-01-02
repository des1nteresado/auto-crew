import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Typography, withStyles } from '@material-ui/core';

import SocialBox from 'commonComponents/SocialBox';

import styles from './styles';

const Footer = ({ classes }) => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const socialNetworks = [
    { name: 'instagramm', link: 'instagramm' },
    { name: 'twitter', link: 'twitter' },
    { name: 'facebook', link: 'facebook' },
  ];

  return (
    <Box className={classes.footer}>
      <Container className={classes.wrapper} maxWidth="lg">
        <Box className={classes.socials}>
          <Typography variant="body2" color="textPrimary" className={classes.copyrightNotice}>
            {`© AUTO+CREW ${currentYear} ALL RIGHTS RESERVED`}
          </Typography>
          <SocialBox style={classes.socialBox} socialNetworks={socialNetworks} />
        </Box>
      </Container>
    </Box>
  );
};

Footer.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default React.memo(withStyles(styles)(Footer));
