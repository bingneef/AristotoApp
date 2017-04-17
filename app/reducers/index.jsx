import { combineReducers } from 'redux';
import rehydrated from './rehydrated';
import user from './user';

export default function createReducers () {
  return combineReducers({ rehydrated, user });
}
