import PropTypes from "prop-types"

/**
 * -------------------------------------
 * Item tab basics
 * Add prop types in ItemTabBasics
 * -------------------------------------
 */
export default {}

/**
 * -------------------------------------
 * Add prop types and default props in LabelGroup
 * -------------------------------------
 */
export const labelGroup = {
  props: {
    title: PropTypes.string.isRequired,
    onHandlerClick: PropTypes.func.isRequired
  },
  default: {
    title: "",
    onHandlerClick() {
      //console.log('click')
    }
  }
}
