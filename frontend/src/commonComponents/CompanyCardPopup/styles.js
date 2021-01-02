const styles = (theme) => ({
  productDetails: {
    width: 350,
    background: theme.palette.white,
    boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    position: 'absolute',
    padding: '20px',
    textAlign: 'center',
    color: theme.palette.black,
    zIndex: 101,
    '&:hover': {
      display: 'block !important',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none !important',
    },
  },
  largeProductImage: {
    borderRadius: 5,
    height: 290,
    cursor: 'pointer',
    marginBottom: 10,
  },
  title: {
    marginBottom: 15,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 10,
    },
  },
  description: {
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    marginTop: 15,
    marginBottom: 15,
    [theme.breakpoints.down('xs')]: {
      '-webkit-line-clamp': 2,
      marginTop: 10,
    },
  },
  mainContent: {
    textAlign: 'left',
  },
  mainActions: {
    display: 'flex',
  },
  socialBox: {
    marginBottom: 20,
    maxWidth: 170,
  },
  likeButton: {
    width: 70,
    height: 40,
    textAlign: 'center',
    color: theme.palette.black,
    marginLeft: 10,
    borderRadius: 5,
    minWidth: 40,
    padding: '0 0 0 11px',
    '& .MuiButton-iconSizeMedium > *:first-child': {
      fontSize: 16,
    },
  },
});

export default styles;
