import { identical, isNil } from 'ramda';
import { GET_LOGGED_USER } from './actionTypes';

// initial users for our app.
const initialUsers = [
  {
    _id: '23423423424jj324',
    name: 'Irish Jane',
    type: 'Admin',
    username: 'irishjane',
    password: '123456'
  },
  {
    _id: '234238sdjf34234j',
    name: 'Drish Cual',
    type: 'Student',
    username: 'drish',
    password: '123456'
  },
  {
    _id: '234234nj23lkj423',
    name: 'Dennis Martin',
    type: 'Teacher',
    username: 'drish',
    password: '123456'
  }
];

// getting user by username and password
const getUserByAuth = ({ users, username, password }) =>
  users.find(
    user =>
      identical(user.username, username) && identical(user.password, password)
  );

/**
 * loggedUser :: (state, action) -> state
 *
 * Managing the state of loggedUser
 */
const loggedUser = (state = '', action) => {
  switch (action.type) {
    case GET_LOGGED_USER: {
      const { username, password } = action.payload;
      // get logged user
      const loggedUser = getUserByAuth({
        users: initialUsers, // we will pass default users
        username,
        password
      });

      // if loggedUser is undefined we will return empty object else return loggedUser
      return !isNil(loggedUser) ? loggedUser._id : '';
    }
    default: {
      return state;
    }
  }
};

export default loggedUser;
