import rightArrow from 'static/images/right-arrow.svg';
import rightArrowActive from 'static/images/right-arrow-hover.svg';

const styles = (theme) => ({
  banner: {
    marginBottom: 0,
  },
  additionalBanner: {
    minWidth: 'unset',
  },
  customRightArrow: {
    right: 'calc(3% + 1px)',
    position: 'absolute',
    zIndex: '10',
    background: 'transparent',
    backgroundImage: `url(${rightArrow})`,
    minWidth: '36px',
    minHeight: '70px',
    cursor: 'pointer',
    '&:hover, &:active': {
      backgroundImage: `url(${rightArrowActive})`,
    },
  },
  customLeftArrow: {
    left: 'calc(3% + 1px)',
    transform: 'rotate(180deg)',
    position: 'absolute',
    zIndex: '10',
    background: 'transparent',
    backgroundImage: `url(${rightArrow})`,
    minWidth: '36px',
    minHeight: '70px',
    cursor: 'pointer',
    '&:hover, &:active': {
      backgroundImage: `url(${rightArrowActive})`,
    },
  },
  dotList: {
    height: 20,
  },
  customDot: {
    width: 40,
    margin: '0 5px 35px',
    cursor: 'pointer',
    height: 10,
    background: 'transparent',
    '&:hover, &:active': {
      borderColor: theme.palette.black,
    },
    borderTop: 'solid 2px rgba(255, 255, 255, .25)',
  },
  customDotActive: {
    width: 40,
    margin: '0 5px 35px',
    cursor: 'pointer',
    height: 10,
    background: 'transparent',
    '&:hover, &:active': {
      borderColor: theme.palette.black,
    },
    borderTop: `solid 2px ${theme.palette.white}`,
  },
});

export default styles;
