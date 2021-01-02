import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, CardMedia, Box, withStyles } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import SocialBox from 'commonComponents/SocialBox/index.js';
import CommonButton from 'commonComponents/CommonButton';
import palette from 'theme/palette';

import styles from './styles.js';

const CompanyCardPopup = ({
  classes,
  handleClick,
  company,
  cardPosition,
  handleFollowCompany,
  isFollow,
  showPopup,
}) => {
  return (
    <Paper
      className={classes.productDetails}
      style={{
        top: cardPosition.top,
        left: cardPosition.left,
        display: showPopup ? 'block' : 'none',
      }}
    >
      <CardMedia
        component="img"
        draggable={false}
        alt="Banner"
        image={company.image}
        className={classes.largeProductImage}
        onClick={handleClick}
      />
      {(company.title || company.description) && (
        <Box className={classes.mainContent}>
          {company.title && (
            <Typography variant="h4" className={classes.title}>
              {company.title}
            </Typography>
          )}
          {company.description && (
            <Typography className={classes.description} variant="body2">
              {company.description}
            </Typography>
          )}
          {company.socialNetworks.length > 0 && (
            <SocialBox style={classes.socialBox} socialNetworks={company.socialNetworks} />
          )}
          <Box className={classes.mainActions}>
            <CommonButton label="Shop now" variant="contained" onClick={handleClick} />
            <CommonButton
              label=""
              startIcon={<FavoriteIcon />}
              variant="contained"
              style={{
                backgroundColor: isFollow ? palette.black : palette.secondary.main,
                color: isFollow ? palette.white : palette.black,
              }}
              className={classes.likeButton}
              onClick={handleFollowCompany}
            />
          </Box>
        </Box>
      )}
    </Paper>
  );
};

CompanyCardPopup.defaultProps = {
  company: {},
  showPopup: false,
  isFollow: false,
};

CompanyCardPopup.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  cardPosition: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleClick: PropTypes.func.isRequired,
  company: PropTypes.oneOfType([PropTypes.object]),
  showPopup: PropTypes.bool,
  handleFollowCompany: PropTypes.func.isRequired,
  isFollow: PropTypes.bool,
};

export default React.memo(withStyles(styles)(CompanyCardPopup));
