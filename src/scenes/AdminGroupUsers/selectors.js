import { createSelector } from "reselect"
import features from "features"

// Selectors
const groupsSelector = () => state => state.adminGroupUsers

const selectIsFetchingGroupUsers = () =>
  createSelector(groupsSelector(), groups => groups.isFetchingGroupUsers)
const selectIsAddingUsersToGroup = () =>
  createSelector(groupsSelector(), groups => groups.isAddingUsersToGroup)
const selectGroupUsers = () =>
  createSelector(groupsSelector(), groups => groups.groupUsers)
const selectNonCurrentGroupUsers = () =>
  createSelector(
    features.adminUsers.selectors.selectUsers(),
    selectGroupUsers(),
    (allUsers, currentGroupUsers) => {
      const groupUsersIds = currentGroupUsers.map(
        groupUser => groupUser.user && groupUser.user.id
      )
      return allUsers.filter(user => !groupUsersIds.includes(user.id))
    }
  )

export const selectors = {
  selectIsFetchingGroupUsers,
  selectGroupUsers,
  selectIsAddingUsersToGroup,
  selectNonCurrentGroupUsers
}
