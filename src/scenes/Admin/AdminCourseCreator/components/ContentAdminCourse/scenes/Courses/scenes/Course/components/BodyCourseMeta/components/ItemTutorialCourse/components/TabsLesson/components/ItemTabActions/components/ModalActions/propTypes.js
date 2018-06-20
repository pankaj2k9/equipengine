import PropTypes from 'prop-types'

/**
 * -------------------------------------
 * Add prop types and default props in ModalActions
 * -------------------------------------
 */
export default {
  props: {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    className: PropTypes.string
  },
  default: {
    isOpen: false,
    handleClose () {
      //console.log('Default click')
    }
  }
}

/**
 * -------------------------------------
 * Add prop types and default props in ModalBody
 * -------------------------------------
 */
export const modalBody = {
  props: {
    selectedOption: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    handleChange: PropTypes.func.isRequired
  },
  default: {
    selectedOption: '',
    //handleChange: () => console.log('Handle change')
  }
}

/**
 * -------------------------------------
 * Add prop types and default props in ContentModalActions
 * -------------------------------------
 */
export const contentModalActions = {
  props: {
    labelText: PropTypes.node,
    actionType: PropTypes.string.isRequired
  },
  default: {
    labelText: '',
    actionType: 'reading'
  }
}
