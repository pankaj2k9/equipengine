import { client } from "./API"

export const fetchStates = ({ current_count = 32 }) =>
  client
    .get(`api/v1/states`, { params: { current_count } })
    .then(response => response.data)
