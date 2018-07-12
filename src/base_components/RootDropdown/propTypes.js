import PropTypes from "prop-types"

/**
 * -------------------------------------
 * Add prop types and default props in Dropdown
 * -------------------------------------
 */
export default {
  props: {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
      })
    ).isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.string
  },
  default: {
    name: "dropdown",
    options: [],
    placeholder: "Select...",
    onChange: () => {}
  }
}
