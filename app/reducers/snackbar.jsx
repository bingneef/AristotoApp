import { SnackbarActions } from '../actions/snackbarActions';

const initialState = {
  open: false,
  message: null
}

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    
    case SnackbarActions.ADD_SNACKBAR:
      return {
        ...state,
        open: true,
        message: action.content
      };
    case SnackbarActions.REMOVE_SNACKBAR:
    case 'persist/REHYDRATE':
      return {
        ...state,
        open: false,
        message: initialState.message
      };
    default:
      return state;
  }
}
