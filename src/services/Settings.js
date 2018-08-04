import { client } from "./API"

/**
 *
 * get User information settings
 */
export const fetchUserSetting = ({ id }) =>
  client.get(`api/v1/users/${id}`).then(response => response.data)

/**
 * update User setting
 */
export const updateSetting = ({
  id,
  firstName,
  lastName,
  address,
  phone,
  zipCode
}) =>
  client
    .put(`api/v1/users/${id}`, {
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
      address,
      zip_code: zipCode
    })
    .then(response => response.data)
