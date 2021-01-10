import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Card, Typography, Box, withStyles, useTheme, useMediaQuery } from '@material-ui/core';

import { videoFormatTester } from 'helpers/mediaHelpers.js';
import VideoPlayer from 'common/components/VideoPlayer';
import CommonButton from 'common/components/CommonButton';

import styles from './styles.js';

const CompanyBanner = ({
  classes,
  handleClick,
  companyName,
  companyDescription,
  image,
  style,
  withShopButton,
}) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Card
      className={clsx(classes.card, style && style)}
      onClick={isMobileView ? handleClick : () => {}}
    >
      {!videoFormatTester(image) ? (
        <>
          {withShopButton && (
            <CommonButton
              label="Shop now"
              variant="contained"
              className={classes.button}
              onClick={handleClick}
            />
          )}
          <div
            className={classes.bannerImage}
            style={{
              background: `url(${image}) top/cover`,
            }}
          >
            <Box className={classes.mainContent}>
              {companyName && (
                <Typography className={classes.name} variant="h1">
                  {companyName}
                </Typography>
              )}
              {companyDescription && (
                <Typography className={classes.description} variant="body1">
                  {companyDescription}
                </Typography>
              )}
            </Box>
          </div>
        </>
      ) : (
        <VideoPlayer
          formats={['mp4', 'webm']}
          controls
          autoPlay
          loop
          muted
          filePath={image}
          style={classes.video}
        />
      )}
    </Card>
  );
};

CompanyBanner.defaultProps = {
  style: '',
  companyDescription: '',
  companyName: '',
  withShopButton: false,
};

CompanyBanner.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  image: PropTypes.string.isRequired,
  companyDescription: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  withShopButton: PropTypes.bool,
  companyName: PropTypes.string,
  style: PropTypes.string,
};

export default React.memo(withStyles(styles)(CompanyBanner));
