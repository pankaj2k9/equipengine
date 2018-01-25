import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// get reducer on data module user
import { reducer as users } from './data/users';

// this is the root reducers, we will combine all reducers that we are using.
export default combineReducers({
  routing: routerReducer,
  users
});
