const styles = (theme) => ({
  formControl: {
    maxHeight: 300,
    width: '100%',
    overflowY: 'scroll',
    '&.MuiTypography-body1': {
      marginBottom: 0,
    },
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
  checkboxContainer: {
    '& span': {
      marginBottom: '0 !important',
    },
  },
  checkbox: {
    '&.Mui-checked': {
      color: theme.palette.black,
    },
    '&:active': {
      color: theme.palette.black,
    },
  },
  sizeGuide: {
    position: 'absolute',
    right: 25,
    zIndex: 10,
  },
});

export default styles;
