import palette from '../palette';

export default {
  root: {
    fontSize: 14,
    fontWeight: 600,
    textTransform: 'inherit',
    borderRadius: 5,
    lineHeight: 'inherit',
    padding: '10px 15px',
    width: '100%',
    height: 40,
    boxShadow: 'none',
    '&$disabled': {
      backgroundColor: 'inherit',
    },
    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
  contained: {
    backgroundColor: palette.secondary.main,
    color: palette.black,
    boxShadow: 'none',
    '&$disabled': {
      backgroundColor: 'rgba(0, 0, 0, 0.18)',
      color: palette.black,
      opacity: 0.25,
    },
    '&:hover': {
      boxShadow: 'none !important',
      backgroundColor: `${palette.black} !important`,
      color: `${palette.white} !important`,
    },
    '&:active': {
      boxShadow: 'none',
    },
  },
  text: {
    color: palette.text.primary,
    fontSize: 14,
    fontWeight: 'normal',
    padding: 0,
    width: 'auto',
    '&:hover': {
      color: palette.black,
      filter: 'brightness(0%)',
      background: 'transparent',
    },
  },
  textPrimary: {
    color: palette.text.primary,
    fontSize: 12,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  textSecondary: {
    color: palette.text.primary,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  endIcon: {
    verticalAlign: 'text-bottom',
  },
  textSizeSmall: {
    fontSize: 14,
  },
  iconSizeSmall: {
    '& > *:first-child': {
      fontSize: 12,
    },
  },
  iconSizeMedium: {
    '& > *:first-child': {
      fontSize: 18,
    },
  },
  iconSizeLarge: {
    '& > *:first-child': {
      fontSize: 24,
    },
  },
  startIcon: {
    marginRight: 7,
  },
};
