const styles = (theme) => ({
  carouselContainer: {
    textAlign: 'right',
    marginBottom: 20,
    '& ::-webkit-scrollbar': {
      height: 15,
      [theme.breakpoints.down('xs')]: {
        height: 0,
      },
    },
    '& ::-webkit-scrollbar-track': {
      boxShadow: 'none',
    },
    '& ::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.black,
      borderRadius: '100px',
      borderTop: '6px solid white',
      borderBottom: '6px solid white',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },
  carouselHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  carousel: {
    display: 'flex',
    width: '100%',
    overflowX: 'scroll',
    '& .MuiCard-root': {
      marginRight: 20,
      marginBottom: 20,
    },
    textAlign: 'left',
  },
  item: {
    marginRight: 24,
    marginBottom: 10,
  },
  title: {
    display: 'block',
    color: theme.palette.black,
    marginBottom: 20,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 10,
    },
  },
  viewAll: {
    width: 'auto',
    marginLeft: 'auto',
    marginBottom: 20,
    padding: 0,
    height: 20,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 10,
    },
  },
});

export default styles;
