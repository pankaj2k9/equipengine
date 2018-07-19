import PropTypes from "prop-types"

export const contextPropTypes = {
  users: PropTypes.array,
  selectedCourses: PropTypes.array,
  selectedUserId: PropTypes.string,
  selectUser: PropTypes.func
}
