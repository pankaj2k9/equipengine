import PropTypes from "prop-types"

/**
 * -------------------------------------
 * Add prop types and default props in ItemTabActions
 * -------------------------------------
 */
export default {}

/**
 * -------------------------------------
 * Add prop types and default props in HeaderActions
 * -------------------------------------
 */
export const headerActions = {
  props: {
    handleShow: PropTypes.func.isRequired
  },
  default: {
    handleShow() {
      //console.log('click')
    }
  }
}

/**
 * -------------------------------------
 * Add prop types and default props in ListActions
 * -------------------------------------
 */
export const listActions = {
  props: {
    list: PropTypes.array.isRequired
  },
  default: {
    list: []
  }
}

/**
 * -------------------------------------
 * Add prop types and default props in ListActionsItem
 * -------------------------------------
 */
export const listActionsItem = {
  props: {
    item: PropTypes.object.isRequired
  },
  default: {
    item: {}
  }
}
