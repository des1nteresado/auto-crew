const styles = (theme) => ({
  filtersMenu: {
    width: 270,
  },
  closeButton: {
    minWidth: 20,
    maxWidth: 20,
    height: 20,
    padding: 0,
    marginLeft: 'auto',
    marginBottom: 10,
    '& span': {
      margin: 0,
    },
  },
  filters: {
    display: 'flex',
  },
  womenFilter: {
    fontSize: 18,
    marginRight: 20,
  },
  filterButton: {
    fontSize: 18,
  },
  pageButton: {
    fontSize: 18,
    color: theme.palette.text.secondary,
  },
  menuWrapper: {
    padding: 20,
    textAlign: 'left',
    '& .MuiButtonBase-root': {
      display: 'block',
      minWidth: 'unset',
    },
  },
  additionAction: {
    color: theme.palette.text.secondary,
  },
});

export default styles;
