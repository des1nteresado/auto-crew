const styles = (theme) => ({
  activeTab: {
    '& .MuiTypography-h3': {
      color: theme.palette.black,
    },
  },
  navigation: {
    '& .MuiTypography-h3': {
      marginBottom: 20,
      '&:hover': {
        color: theme.palette.black,
      },
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-evenly',
      marginBottom: 20,
      '& .MuiTypography-h3': {
        marginBottom: 0,
        fontSize: 16,
        fontWeight: 'normal',
      },
    },
  },
});

export default styles;
