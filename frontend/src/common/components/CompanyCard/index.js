import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardMedia, Box } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import CompanyCardPopup from 'common/components/CompanyCardPopup/index.js';
import CommonButton from 'common/components/CommonButton';

import styles from './styles.js';

const CompanyCard = ({
  classes,
  handleClick,
  company,
  handleFollowCompany,
  isFollow,
  withFollowButton,
  style,
  buttonStyle,
}) => {
  const cardRef = useRef(null);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOverCard = useCallback(() => {
    const cardCoordinates = cardRef && cardRef.current && cardRef.current.getBoundingClientRect();

    if (cardCoordinates) {
      setCardPosition({
        top: `${Math.round(
          cardCoordinates.top - document.body.getBoundingClientRect().top - 30
        )}px`,
        left: `${Math.round(cardCoordinates.left - 60)}px`,
      });
      setShowPopup(true);
    }
  }, [cardRef, setShowPopup]);

  const handleMouseOutCard = useCallback(() => {
    setShowPopup(false);
  }, [setShowPopup]);

  return (
    <Card
      className={clsx(classes.card, style && style)}
      ref={cardRef}
      onMouseOver={!withFollowButton ? handleMouseOverCard : null}
      onMouseOut={!withFollowButton ? handleMouseOutCard : null}
      onBlur={!withFollowButton ? handleMouseOutCard : null}
      onFocus={!withFollowButton ? handleMouseOverCard : null}
    >
      <CardMedia
        component="img"
        draggable={false}
        alt="Banner"
        image={company.image}
        className={classes.companyImage}
      />
      {!withFollowButton && (
        <CompanyCardPopup
          company={company}
          handleClick={handleClick}
          cardPosition={cardPosition}
          showPopup={showPopup}
          handleFollowCompany={handleFollowCompany}
          isFollow={isFollow}
        />
      )}
      {(company.title || company.description) && (
        <CardContent className={classes.mainContent}>
          {company.title && (
            <Typography variant="h4" className={classes.title}>
              {company.title}
            </Typography>
          )}
          <Typography className={classes.description} variant="body2">
            {company.description}
          </Typography>
          <Box className={classes.mainActions}>
            <CommonButton
              label="Shop now"
              variant="contained"
              className={clsx(classes.button, buttonStyle && buttonStyle)}
              onClick={handleClick}
            />
            {withFollowButton && (
              <CommonButton
                label="Unfollow"
                variant="contained"
                className={clsx(classes.button, buttonStyle && buttonStyle)}
                startIcon={<FavoriteIcon />}
                onClick={handleFollowCompany}
              />
            )}
          </Box>
        </CardContent>
      )}
    </Card>
  );
};

CompanyCard.defaultProps = {
  style: '',
  buttonStyle: '',
  withFollowButton: false,
  isFollow: false,
  company: {},
};

CompanyCard.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  company: PropTypes.oneOfType([PropTypes.object]),
  handleClick: PropTypes.func.isRequired,
  handleFollowCompany: PropTypes.func.isRequired,
  isFollow: PropTypes.bool,
  withFollowButton: PropTypes.bool,
  style: PropTypes.string,
  buttonStyle: PropTypes.string,
};

export default React.memo(withStyles(styles)(CompanyCard));
