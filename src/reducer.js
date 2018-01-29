import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// get reducer
import { reducer as users } from './data/users';
import loggedUser from './scenes/Login/reducer';

// this is the root reducers, we will combine all reducers that we are using.
export default combineReducers({
  routing: routerReducer,
  users,
  loggedUser
});