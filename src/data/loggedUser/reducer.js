import { identical, isNil } from 'ramda';
import { ADD_LOGGED_USER } from './actionTypes.js';

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
 * Managing the state of loggedUser. LoggedUser will hold either a userID or null.
 */
const loggedUser = (state = '', action) => {
  switch (action.type) {
    case ADD_LOGGED_USER: {
      const { username, password } = action.payload;
      // get logged user
      const loggedUser = getUserByAuth({
        users: initialUsers, // we will pass default users
        username,
        password
      });

      // if loggedUser is undefined we will return
      return !isNil(loggedUser) ? loggedUser._id : null;
    }
    default: {
      return state;
    }
  }
};

export default loggedUser;
