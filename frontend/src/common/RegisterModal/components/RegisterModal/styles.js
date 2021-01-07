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
  submitButton: {
    marginTop: 25,
    marginBottom: 15,
  },
  commomDialog: { borderRadius: 10 },
  dialogWrapper: {
    maxWidth: 345,
    textAlign: 'center',
    margin: 'auto',
    maginBotom: 53,
    [theme.breakpoints.down(420)]: {
      margin: -10,
    },
  },
  signInButton: {
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
