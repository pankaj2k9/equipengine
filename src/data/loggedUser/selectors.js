import { createSelector } from 'reselect';
import { isEmpty } from 'ramda';

// select logged user proccess error
export const selectProcessError = state =>
  state.loggedUser.processRequest.error;

// get error message
export const getErrorMessage = createSelector(
  selectProcessError,
  error => (isEmpty(error) ? error : error.message)
);

// check if user is valid
export const isUserValid = createSelector(getErrorMessage, isEmpty);
