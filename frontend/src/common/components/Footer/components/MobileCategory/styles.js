const styles = (theme) => ({
  category: {
    display: 'block',
    minHeight: 45,
    width: '100%',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    padding: 10,
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    width: 'fit-content',
    marginTop: 15,
    '&:hover': {
      color: theme.palette.black,
    },
  },
});

export default styles;
