import { client } from "./API"

/**
 * @param id id of organization
 * @returns organization
 */
export const fetchOrganization = id =>
  client.get(`/api/v1/organizations/${id}/`).then(response => response.data)

/**
 * @param id id of organization
 * @returns organization
 */
export const changeOrganization = ({ id, organization }) =>
  client
    .put(`/api/v1/organizations/${id}/`, { organization })
    .then(response => response.data)

/**
 * @param id id of organization_users
 * @returns
 */
export const updateOrganizationAdmin = ({ id, role }) =>
  client
    .put(`/api/v1/organization_users/${id}/`, { role })
    .then(response => response.data)
