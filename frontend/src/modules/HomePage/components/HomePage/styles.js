const styles = (theme) => ({
  filters: {
    textAlign: 'center',
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 30,
    },
  },
  filterButton: {
    fontSize: 16,
    margin: '0 15px 0 25px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  item: {
    maxWidth: 230,
  },
  greeting: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default styles;
