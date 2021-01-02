const styles = (theme) => ({
  profileInfoContainer: {
    color: theme.palette.black,
    '&:focus-within .MuiTypography-h3': {
      color: theme.palette.text.primary,
    },
    '& .MuiGrid-grid-xs-12': {
      paddingLeft: 20,
      paddingBottom: 20,
      [theme.breakpoints.down('xs')]: {
        paddingRight: 20,
      },
    },
    '& .MuiButton-root': {
      [theme.breakpoints.down('sm')]: {
        marginTop: 20,
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: 20,
        marginLeft: 0,
        marginRight: 20,
      },
    },
    '& .MuiGrid-grid-xs-6': {
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        padding: '10px 30px 30px 0',
      },
    },
  },
});

export default styles;
