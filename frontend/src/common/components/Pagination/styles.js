const styles = (theme) => ({
  paginationItem: {
    background: theme.palette.secondary.main,
    color: theme.palette.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
  paginationRoundedItem: {
    borderRadius: 5,
  },
  selectedPaginationItem: {
    backgroundColor: `${theme.palette.black} !important`,
    color: theme.palette.white,
  },
});

export default styles;
