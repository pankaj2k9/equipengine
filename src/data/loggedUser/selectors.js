import { createSelector } from 'reselect';
import { isEmpty, isNil } from 'ramda';
// import other selector
import { usersSelectors } from 'data/users';

// select loggedUser
export const selectLoggedUser = state => state.loggedUser;

// compute the derived data. Check if the user is valid
export const isUserValid = createSelector(
  usersSelectors.selectUsers,
  selectLoggedUser,
  (users, loggedUser) =>
    isEmpty(loggedUser) || !isNil(users[loggedUser]) ? true : false
);
