import { combineReducers } from 'redux';
import rehydrated from './rehydrated';
import user from './user';
import rounds from './rounds';
import snackbar from './snackbar';

export default function createReducers () {
  return combineReducers({ rehydrated, user, rounds, snackbar });
}
