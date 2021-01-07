const styles = (theme) => ({
  filtersLayout: {
    marginBottom: 80,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 40,
      marginTop: 0,
    },
  },
  topNavigation: {
    marginBottom: 20,
  },
  prevPage: {
    display: 'inline-block',
  },
  currentPage: {
    display: 'inline-block',
  },
  categoriesWithFilters: {
    '& .MuiTypography-root': {
      marginBottom: 10,
    },
    '& .MuiTypography-body1': {
      cursor: 'pointer',
    },
  },
  activeCategory: {
    marginBottom: 20,
    '& .MuiTypography-body1': {
      '&:hover': {
        color: theme.palette.black,
      },
    },
  },
  inactiveCategory: {
    marginTop: 10,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.black,
    },
  },
  filters: {
    width: '90%',
    marginTop: 30,
  },
  priceValues: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  subCategory: {
    display: 'block',
    textAlign: 'left',
    height: 30,
  },
  activeSubCategory: {
    '& .MuiTypography-body1': {
      color: theme.palette.black,
    },
    '& + $resetCategory': {
      display: 'block',
    },
  },
  mainActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  followButton: {
    maxWidth: 230,
  },
  socialBox: {
    maxWidth: 230,
    width: '100%',
  },
  checkboxContainer: {
    '& .MuiTypography-root': {
      marginBottom: 0,
    },
  },
  checkbox: {
    '&.Mui-checked': {
      color: theme.palette.black,
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
  category: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  resetCategory: {
    display: 'none',
    minWidth: 20,
    maxWidth: 20,
    height: 20,
    padding: 0,
    marginRight: 30,
    '& span': {
      margin: 0,
      paddingBottom: '2px',
    },
  },
  sizeGuideModal: {
    textAlign: 'center',
    '& img': {
      margin: 'auto',
    },
  },
  closeButton: {
    minWidth: 20,
    maxWidth: 20,
    height: 40,
    position: 'absolute',
    top: 11,
    right: 15,
    padding: 0,
    '& span': {
      margin: 0,
    },
  },
  pagination: {
    display: 'flex',
    '& nav': {
      textAlign: 'center',
      margin: 'auto',
      marginTop: 80,
    },
  },
  links: {
    textAlign: 'center',
    marginBottom: 10,
  },
  linkButton: {
    fontSize: 16,
    margin: '0 15px 0 25px',
  },
});

export default styles;
