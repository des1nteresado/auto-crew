const styles = (theme) => ({
  closeButton: {
    color: theme.palette.black,
    minWidth: 20,
    maxWidth: 20,
    height: 40,
    position: 'absolute',
    top: 11,
    right: 15,
    padding: 0,
  },
  modalTitle: {
    color: theme.palette.black,
    marginBottom: 20,
    padding: 10,
  },
  cancelWrapper: {
    marginBottom: 30,
  },
  buttonsWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlButton: {
    marginRight: 50,
    color: theme.palette.black,

    '&:last-of-type': {
      marginRight: 0,
    },
  },
});

export default styles;
