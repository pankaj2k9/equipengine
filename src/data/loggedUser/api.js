import { identical, isNil } from "ramda"
import { reduce } from "lodash"
//
import userAvatar from "resources/images/user.png"

const fakeUsers = {
  "23423423424jj324": {
    _id: "23423423424jj324",
    name: "Irish Jane Cual",
    type: "Admin",
    username: "admin",
    password: "123456",
    avatar: userAvatar
  },
  "234238sdjf34234j": {
    _id: "234238sdjf34234j",
    name: "Dennis Cual",
    type: "Student",
    username: "student",
    password: "123456",
    avatar: userAvatar
  },
  "234234nj23lkj423": {
    _id: "234234nj23lkj423",
    name: "Drish Cual",
    type: "Teacher",
    username: "teacher",
    password: "123456",
    avatar: userAvatar
  }
}

/**
 * loggingUser :: Object -> Promise
 *
 * A fake loggingUser for checking if user is exist or not.
 * @param {Object} account
 * @return {Promise}
 */
export const fetchUser = ({ username = "", password = "" }) => {
  // fake users to array.
  const fakeUsersArr = reduce(
    fakeUsers,
    (users, user) => users.concat(user),
    []
  )

  // find user.
  const loggedUser = fakeUsersArr.find(
    user =>
      identical(user.username, username) && identical(user.password, password)
  )

  // create promise which either resolved or rejected.
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // success obj
      const successObj = {
        status: "successfully",
        message: "Successfully.",
        user: loggedUser
      }

      // error obj
      const errorObj = {
        status: "error",
        message: "Username or password is invalid.",
        user: {}
      }

      // creating promise data.
      return !isNil(loggedUser) ? resolve(successObj) : reject(errorObj)
    }, 1000)
  })

  return promise
}
