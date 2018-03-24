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
export const defaultFlexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.isColumn ? 'column' : props.flexDirection};
  align-items: ${(props) => props.isAlignCenter ? 'center' : props.alignItems};
  justify-content: ${(props) => props.isSpaceBetween ? 'space-between' : props.justifyContent};
  background-color: ${(props) => props.backgroundColor};
`

/**
 * -------------------------------------
 * ContainerFlex - for div tag. Based on the default flex styles.
 * @function
 * -------------------------------------
 */
const ContainerFlex = defaultFlexStyles('div')

export default ContainerFlex

/**
 * -------------------------------------
 * FooterFlex - for footer tag. Based on the default flex styles.
 * @function
 * -------------------------------------
 */
export const FooterFlex = defaultFlexStyles('footer')

/**
 * -------------------------------------
 * SectionFlex - for section tag. Based on the default flex styles.
 * @function
 * -------------------------------------
 */
export const SectionFlex = defaultFlexStyles('section')

/**
 * -------------------------------------
 * SectionFlex - for section tag. Based on the default flex styles.
 * @function
 * -------------------------------------
 */
export const ArticleFlex = defaultFlexStyles('section')
