const styles = (theme) => ({
  filterContainer: {
    borderBottom: 'solid 1px rgba(0,0,0, .15)',
    paddingBottom: 5,
    marginBottom: 10,
    position: 'relative',
  },
  filter: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
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
