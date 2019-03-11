import { combineReducers } from 'redux';
import summary from './summary/reducer';

const appReducers = combineReducers({ summary });

// This is a convenience setup, if we need to handle any global
// reduction / state change (i.e. wiping state for some reason),
// we do it here prior to returning the appReducers.
const combinedReducers = (state, action) => {
  return appReducers(state, action);
}

export default combinedReducers;
