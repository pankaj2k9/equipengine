import { client } from "./API"

export const fetchCountries = ({ current_count = 300 }) =>
  client
    .get(`api/v1/countries`, { params: { current_count } })
    .then(response => response.data)

export const fetchCountry = ({ id }) =>
  client.get(`api/v1/coutry/${id}`).then(response => response.data)
