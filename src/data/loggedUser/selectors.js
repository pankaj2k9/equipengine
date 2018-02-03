import { createSelector } from 'reselect';
import { isEmpty, not, compose } from 'ramda';
import { get } from 'lodash';
// import other selector
import { usersSelectors } from 'data/users';

// select loggedUser ID
export const selectLoggedUserID = state => state.loggedUser;

// select loggedUser information
export const getLoggedUser = createSelector(
  usersSelectors.selectUsers,
  selectLoggedUserID,
  // if the value is undefined, get will return the 3 input of get function.
  (users, loggedUserID) => get(users, loggedUserID, {})
);

// validate if the user is valid
export const isUserValid = createSelector(getLoggedUser, compose(not, isEmpty));
