import PropTypes from 'prop-types'

/**
 * -------------------------------------
 * Add prop types and default props in Dropdown
 * -------------------------------------
 */
export default {
  props: {
    dropdownName: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
      })
    ).isRequired,
    className: PropTypes.string
  },
  default: {
    dropdownName: 'dropdown',
    options: []
  }
}
