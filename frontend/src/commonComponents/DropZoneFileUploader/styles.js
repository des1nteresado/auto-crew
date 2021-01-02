const styles = (theme) => ({
  dropZone: {
    width: '100%',
    border: `2px dashed ${theme.palette.black}`,
    padding: 85,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 25,
    maxWidth: 1140,
    margin: '0 auto',
  },
  divider: {
    margin: '25px 0',
  },
  subtitle: {
    fontSize: 17,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#262422',
    color: theme.palette.white,
  },
  warningIcon: {
    marginBottom: 25,
    height: 40,
    width: 40,
  },
});

export default styles;
