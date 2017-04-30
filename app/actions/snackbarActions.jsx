const SnackbarActions = {
  ADD_SNACKBAR: 'ADD_SNACKBAR',
  REMOVE_SNACKBAR: 'REMOVE_SNACKBAR'
};

const addSnackbar = (content) => {
  const obj = {
    type: SnackbarActions.ADD_SNACKBAR,
    content
  }
  return obj
}

const removeSnackbar = (content) => {
  const obj = {
    type: SnackbarActions.REMOVE_SNACKBAR,
    content
  }
  return obj
}

export { SnackbarActions, addSnackbar, removeSnackbar }
