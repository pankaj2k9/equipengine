import { GET_LOGGED_USER } from './actionTypes';

/**
 * loggedUser :: Object -> Object
 *
 * Action creator for setting the logged user.
 * @param {Object} account user account
 * @return {Object}
 */
export const loggedUser = account => ({
  type: GET_LOGGED_USER,
  payload: {
    ...account
  }
});
