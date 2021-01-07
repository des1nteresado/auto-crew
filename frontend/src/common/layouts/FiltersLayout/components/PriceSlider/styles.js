const styles = (theme) => ({
  filterItem: {
    paddingRight: 11,
    paddingLeft: 6,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 10,
      paddingLeft: 6,
    },
  },
  priceValues: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default styles;
