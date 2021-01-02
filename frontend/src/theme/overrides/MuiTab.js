import palette from '../palette';
import typography from '../typography';

export default {
  root: {
    color: palette.black,
    textTransform: 'unset',
    fontWeight: 'normal',
    fontSize: typography.body1.fontSize,
    lineHeight: typography.body1.lineHeight,
    minWidth: 'auto',
    '&:hover': {
      color: palette.black,
      opacity: 1,
    },
    textColorInherit: {
      opacity: 0.5,
    },
  },
};
