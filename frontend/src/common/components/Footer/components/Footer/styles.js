const styles = (theme) => ({
  footer: {
    padding: '30px 0',
    width: '100%',
    minHeight: 100,
    background: theme.palette.background.secondary,
  },
  linkContainer: {
    maxWidth: 600,
    margin: 'auto',
    marginBottom: 30,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },
  copyrightNotice: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  subTitle: {
    width: 'fit-content',
    '&:hover': {
      color: theme.palette.black,
    },
  },
  category: {
    textAlign: 'center',
  },
  socials: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  socialBox: {
    minWidth: 200,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 30,
    },
  },
});

export default styles;
