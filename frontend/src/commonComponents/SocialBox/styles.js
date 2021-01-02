import instagram from 'static/images/instagram.svg';
import instagramActive from 'static/images/instagram-hover.svg';
import facebook from 'static/images/facebook.svg';
import facebookActive from 'static/images/facebook-hover.svg';
import pinterest from 'static/images/pinterest.svg';
import pinterestActive from 'static/images/pinterest-hover.svg';
import twitter from 'static/images/twitter.svg';
import twitterActive from 'static/images/twitter-hover.svg';

const styles = (theme) => ({
  socialBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 250,
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
      marginTop: 30,
    },
  },
  instagram: {
    cursor: 'pointer',
    width: 16,
    height: 16,
    backgroundImage: `url(${instagram})`,
    '&:hover': {
      backgroundImage: `url(${instagramActive})`,
    },
    '&:active': {
      backgroundImage: `url(${instagramActive})`,
    },
  },
  facebook: {
    cursor: 'pointer',
    width: 8,
    height: 16,
    backgroundImage: `url(${facebook})`,
    '&:hover': {
      backgroundImage: `url(${facebookActive})`,
    },
    '&:active': {
      backgroundImage: `url(${facebookActive})`,
    },
  },
  pinterest: {
    cursor: 'pointer',
    width: 17,
    height: 16,
    backgroundImage: `url(${pinterest})`,
    '&:hover': {
      backgroundImage: `url(${pinterestActive})`,
    },
    '&:active': {
      backgroundImage: `url(${pinterestActive})`,
    },
  },
  twitter: {
    cursor: 'pointer',
    width: 21,
    height: 16,
    backgroundImage: `url(${twitter})`,
    '&:hover': {
      backgroundImage: `url(${twitterActive})`,
    },
    '&:active': {
      backgroundImage: `url(${twitterActive})`,
    },
  },
});

export default styles;
