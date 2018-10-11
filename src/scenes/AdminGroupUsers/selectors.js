import { createSelector } from "reselect"
import features from "features"

// Selectors
const groupsSelector = () => state => state.adminGroupUsers

const selectGroupUsers = () =>
  createSelector(groupsSelector(), state => state.groupUsers)

const selectGroupUsersPagination = () =>
  createSelector(groupsSelector(), state => state.groupUsersPagination)

const selectIsAddingUsersToGroup = () =>
  createSelector(groupsSelector(), state => state.isAddingUsersToGroup)

const selectIsDeletingUsersFromGroup = () =>
  createSelector(groupsSelector(), state => state.isDeletingUsersFromGroup)

const selectIsFetchingGroupUsers = () =>
  createSelector(groupsSelector(), state => state.isFetchingGroupUsers)

const selectIsUpdatingUserGroupStatus = () =>
  createSelector(groupsSelector(), state => state.isUpdatingUserGroupStatus)

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

const selectSelectedGroupUser = () =>
  createSelector(groupsSelector(), state => state.selectedGroupUsers)

export const selectors = {
  selectGroupUsers,
  selectGroupUsersPagination,
  selectIsAddingUsersToGroup,
  selectIsDeletingUsersFromGroup,
  selectIsFetchingGroupUsers,
  selectIsUpdatingUserGroupStatus,
  selectNonCurrentGroupUsers,
  selectSelectedGroupUser
}
