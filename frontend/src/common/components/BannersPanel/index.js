import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import { getFirstCompanyImage } from 'helpers/mediaHelpers.js';
import CompanyBanner from '../CompanyBanner';
import responsiveConfig from './responsiveConfig';

import styles from './styles';

const BannersPanel = ({
  classes,
  withAdditionalBanners,
  withShopButton,
  companies,
  companyInfo,
  handleClick,
}) => {
  const CustomArrow = ({ onClick, className }) => {
    return <button className={className} label="" onClick={onClick} />;
  };
  const CustomDot = ({ onClick, active }) => {
    return (
      <li className={active ? classes.customDotActive : classes.customDot} onClick={onClick} />
    );
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Carousel
          swipeable
          draggable
          infinite
          showDots
          // autoPlay
          responsive={responsiveConfig}
          customRightArrow={<CustomArrow className={classes.customRightArrow} />}
          customLeftArrow={<CustomArrow className={classes.customLeftArrow} />}
          customDot={<CustomDot />}
          arrows
          dotListClass={classes.dotList}
          // autoPlaySpeed={20000}
          removeArrowOnDeviceType={['tablet', 'mobile']}
        >
          {companyInfo && companyInfo.media
            ? companyInfo.media.map((media) => (
                <CompanyBanner
                  key={media._id}
                  image={media.url}
                  companyName={companyInfo.title}
                  companyDescription={companyInfo.description}
                  style={classes.banner}
                  withShopButton={withShopButton}
                  handleClick={() => handleClick(companyInfo.pathName)}
                />
              ))
            : companies
                .slice(0, 3)
                .map((company) => (
                  <CompanyBanner
                    key={company._id}
                    image={getFirstCompanyImage(company.media)}
                    companyName={company.title}
                    companyDescription={company.landingDescription}
                    withShopButton={withShopButton}
                    style={classes.banner}
                    handleClick={() => handleClick(company.pathName)}
                  />
                ))}
        </Carousel>
      </Grid>
      {withAdditionalBanners &&
        companies.slice(1, 3).map((company) => (
          <Grid item xs={6} key={company._id}>
            <CompanyBanner
              image={getFirstCompanyImage(company.media)}
              companyName={company.title}
              companyDescription={company.landingDescription}
              withShopButton={withShopButton}
              style={classes.additionalBanner}
              handleClick={() => handleClick(company.pathName)}
            />
          </Grid>
        ))}
    </Grid>
  );
};

BannersPanel.defaultProps = {
  withAdditionalBanners: false,
  withShopButton: false,
  companies: [],
  companyInfo: {},
  handleClick: () => {},
};

BannersPanel.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  companyInfo: PropTypes.oneOfType([PropTypes.object]),
  companies: PropTypes.oneOfType([PropTypes.array]),
  handleClick: PropTypes.func,
  withShopButton: PropTypes.bool,
  withAdditionalBanners: PropTypes.bool,
};

export default React.memo(withStyles(styles)(BannersPanel));
