const styles = (theme) => ({
  closeButton: {
    color: theme.palette.black,
    minWidth: 20,
    maxWidth: 20,
    position: 'absolute',
    top: 18,
    right: 15,
    padding: 0,
  },
  backButton: {
    color: theme.palette.black,
    minWidth: 20,
    maxWidth: 20,
    position: 'absolute',
    top: 22,
    left: 22,
    padding: 0,
  },
  submitButton: {
    marginTop: 16,
  },
  commomDialog: { borderRadius: 10 },
  dialogWrapper: {
    maxWidth: 324,
    textAlign: 'center',
    margin: 'auto',
    marginBottom: 50,
  },
  emailInput: {
    marginTop: 36,
  },
});

export default styles;
