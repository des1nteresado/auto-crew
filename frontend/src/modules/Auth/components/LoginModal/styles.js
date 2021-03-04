const styles = (theme) => ({
  closeButton: {
    minWidth: 20,
    maxWidth: 20,
    height: 40,
    position: 'absolute',
    top: 11,
    right: 15,
    padding: 0,
  },

  commomDialog: { borderRadius: 10 },
  dialogWrapper: {
    maxWidth: 324,
    textAlign: 'center',
    margin: 'auto',
    maginBotom: 53,
    [theme.breakpoints.down(420)]: {
      margin: -10,
    },
  },
  resetPassword: {
    fontSize: 12,
    marginLeft: 'auto',
  },
  passwordBox: {
    textAlign: 'right',
  },
  signUpButton: {
    fontSize: 12,
  },
  topActions: {
    marginBottom: 10,
    [theme.breakpoints.down('xs')]: {
      '& .MuiTypography-h2': {
        fontSize: 19,
      },
      '& .MuiTypography-h3': {
        fontSize: 16,
      },
    },
  },
});

export default styles;
