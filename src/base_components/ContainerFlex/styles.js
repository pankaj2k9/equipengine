import css from 'utils/css'

/**
 * -------------------------------------
 * All instances inherit these prop-types:
 *   isAlignCenter: PropTypes.bool,
 *   isSpaceBetween: PropTypes.bool,
 *   justifyContent: PropTypes.string,
 *   alignItems: PropTypes.string,
 *   flexDirection: PropTypes.string,
 *   backgroundColor: PropTypes.string
 * Default flex styles
 * @function
 * -------------------------------------
 */
export default css`
  display: flex;
  flex-direction: ${(props) => props.isColumn ? 'column' : props.flexDirection};
  align-items: ${(props) => props.isAlignCenter ? 'center' : props.alignItems};
  justify-content: ${(props) => props.isSpaceBetween ? 'space-between' : props.justifyContent};
  background-color: ${(props) => props.backgroundColor};
`
