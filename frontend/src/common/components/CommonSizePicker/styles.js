const styles = (theme) => ({
  root: {
    height: 40,
    width: 40,
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.black,
    cursor: 'pointer',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: `${theme.palette.black} !important`,
      color: theme.palette.white,
    },
    '& .MuiTypography-body2': {
      fontWeight: 'bold',
    },
    '& span': {
      marginRight: '0 !important',
      marginBottom: '0 !important',
    },
  },
  colorSecondary: {
    '&.Mui-checked': {
      backgroundColor: theme.palette.black,
      color: theme.palette.white,
    },
    '&.Mui-disabled': {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.main,
    },
  },
});

export default styles;
