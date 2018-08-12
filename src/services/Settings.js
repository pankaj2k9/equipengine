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
  zipCode,
  country,
  state,
  birthDate
}) =>
  client
    .put(`api/v1/users/${id}`, {
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
      address,
      zip_code: zipCode,
      country_id: country,
      state_id: state,
      date_of_birth: birthDate
    })
    .then(response => response.data)
