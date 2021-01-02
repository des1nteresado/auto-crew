const styles = (theme) => ({
  changePasswordContainer: {
    alignSelf: 'baseline',
    '&:focus-within .MuiTypography-h3': {
      color: `${theme.palette.black} !important`,
    },
  },
});

export default styles;
