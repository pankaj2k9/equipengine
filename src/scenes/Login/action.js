import { ADD_LOGGED_USER } from './actionTypes';

/**
 * addLoggedUser :: Object -> Object
 *
 * Action creator for setting the logged user.
 * @param {Object} account user account
 * @return {Object}
 */
export const addLoggedUser = account => ({
  type: ADD_LOGGED_USER,
  payload: {
    ...account
  }
});
