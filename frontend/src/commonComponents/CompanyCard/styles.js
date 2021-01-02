const styles = (theme) => ({
  card: {
    boxShadow: 'none',
    background: theme.palette.white,
    marginBottom: 20,
    marginRight: 20,
    minWidth: 230,
    [theme.breakpoints.down('xs')]: {
      minWidth: 280,
    },
  },
  companyImage: {
    borderRadius: 5,
    height: 230,
    marginBottom: 10,
    [theme.breakpoints.down('xs')]: {
      height: 200,
      marginBottom: 15,
    },
  },
  button: {
    height: 40,
    marginTop: 10,
  },
  title: {
    marginBottom: 15,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 10,
    },
  },
  mainContent: { color: theme.palette.black },
  description: {
    display: '-webkit-box',
    minHeight: 28,
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  mainActions: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    [theme.breakpoints.down('650')]: {
      flexWrap: 'wrap',
    },
  },
});

export default styles;
