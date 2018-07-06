import PropTypes from "prop-types"

/**
 * -------------------------------------
 * Add prop types and default props in BreadCrumbs
 * -------------------------------------
 */
export default {
  props: {
    position: PropTypes.string,
    padding: PropTypes.string
  },
  default: {
    position: "sticky",
    padding: "4% 6%"
  }
}
