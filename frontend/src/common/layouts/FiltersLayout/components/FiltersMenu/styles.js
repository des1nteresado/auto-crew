const styles = (theme) => ({
  filterItem: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: 'solid 1px rgba(0,0,0, .15)',
    marginBottom: 10,
  },
  addFilter: {
    marginBottom: 10,
  },
  filtersMenu: {
    width: 270,
    padding: 20,
  },
  filterTitle: {
    color: theme.palette.black,
    marginBottom: 20,
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
  filterActions: {
    display: 'flex',
    marginTop: 'auto',
    marginBottom: 30,
  },
  cancelButton: {
    width: '100%',
  },
  activeCategory: {
    color: theme.palette.black,
    marginBottom: 20,
    '& .MuiTypography-h3': {
      marginBottom: 10,
    },
    '& .MuiTypography-body1': {
      marginBottom: 10,
      '&:hover': {
        color: theme.palette.black,
      },
    },
  },
  subCategoriesContainer: {
    maxHeight: 300,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: 15,
      [theme.breakpoints.down('xs')]: {
        height: 0,
      },
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'none',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.black,
      borderRadius: '100px',
      borderRight: '6px solid white',
      borderLeft: '6px solid white',
    },
  },
  activeSubCategory: {
    '& .MuiTypography-body1': {
      color: theme.palette.black,
    },
    '& + $resetCategory': {
      display: 'block',
    },
  },
  subCategory: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  resetCategory: {
    display: 'none',
    minWidth: 20,
    maxWidth: 20,
    height: 20,
    padding: 0,
    marginLeft: 'auto',
    '& span': {
      margin: 0,
      paddingBottom: '2px',
    },
  },
});

export default styles;
