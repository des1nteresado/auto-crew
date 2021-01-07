const styles = (theme) => ({
  root: {
    width: '100%',
    '& .MuiInput-root': {
      height: 40,
    },
    '& .Mui-error': {
      color: `${theme.palette.error.main} !important`,
      '& .MuiInputBase-input': {
        color: theme.palette.error.main,
        borderColor: theme.palette.error.main,
      },
    },
    '& .MuiInput-underline:after': {
      display: 'none',
    },
    '& .MuiInput-underline:before': {
      display: 'none',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: theme.palette.text.primary,
    },
    '& label + .MuiInput-formControl': {
      marginTop: 0,
    },
    '& .MuiInputBase-input': {
      fontSize: 13,
      border: '1px solid',
      borderColor: theme.palette.text.primary,
      borderRadius: 5,
      paddingTop: 12,
      paddingLeft: 14,
      color: theme.palette.black,
    },
    '& .MuiInputBase-input:focus': {
      borderColor: theme.palette.black,
    },
    '& .MuiInputLabel-formControl': {
      fontSize: 13,
      left: 15,
      top: 4,
      color: theme.palette.text.primary,
      transform: 'translate(0, 9px) scale(1)',
    },
    '& .MuiInputLabel-shrink': {
      color: theme.palette.text.primary,
      transform: 'translate(0, 2px) scale(0.75)',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
    '& .MuiSelect-icon': {
      color: theme.palette.text.primary,
      right: 10,
    },
    '& .MuiFormHelperText-root': {
      position: 'absolute',
      bottom: -18,
    },
  },
});

export default styles;
