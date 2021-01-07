const styles = (theme) => ({
  card: {
    boxShadow: 'none',
    position: 'relative',
    background: theme.palette.white,
    marginBottom: 20,
    minWidth: 230,
    '&:hover div': {
      color: theme.palette.black,
    },
    '&:hover div:before': {
      height: '100%',
    },
    '&:hover button': {
      color: theme.palette.white,
      background: theme.palette.black,
    },
  },
  bannerImage: {
    borderRadius: 5,
    color: theme.palette.white,
    position: 'relative',
    backgroundCover: 'cover',
    height: 440,
    [theme.breakpoints.down('xs')]: {
      height: 200,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: '0%',
      width: '100%',
      bottom: '0',
      background: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(25px)',
    },
  },
  button: {
    height: 40,
    maxWidth: 230,
    left: 0,
    right: 0,
    bottom: 60,
    margin: 'auto',
    zIndex: 2,
    position: 'absolute',
    '&:hover + $bannerImage': {
      color: theme.palette.black,
    },
    '&:hover + $bannerImage:before': {
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  mainContent: {
    bottom: 120,
    margin: 'auto',
    position: 'absolute',
    left: '0',
    right: '0',
    zIndex: 2,
    textAlign: 'center',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '80%',
      '& .MuiTypography-h1': {
        fontSize: '36px',
        lineHeight: '46px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      bottom: 60,
      width: '100%',
      padding: '0 10px',
      '& .MuiTypography-h1': {
        fontSize: '24px',
        lineHeight: '29px',
      },
    },
  },
  description: {
    marginTop: 20,
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    },
  },
  video: {
    width: '100%',
    height: 440,
    padding: 0,
    objectFit: 'cover',
    [theme.breakpoints.down('xs')]: {
      height: 200,
    },
  },
});

export default styles;
