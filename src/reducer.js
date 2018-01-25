import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// this is the root reducers, we will combine all reducers that we are using.
export default combineReducers({
  routing: routerReducer
});
