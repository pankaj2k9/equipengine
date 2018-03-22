import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * -------------------------------------
 * Default flex styles
 * @function
 * -------------------------------------
 */
const DefaultFlex = styled('div')`
  display: flex;
  flex-direction: ${(props) => props.isColumn && 'column'};
  align-items: ${(props) => props.isAlignCenter ? 'center' : props.alignItems};
  justify-content: ${(props) => props.isSpaceBetween ? 'space-between' : props.justifyContent};
`

/**
 * -------------------------------------
 * ContainerFlex - for div tag
 * @function
 * -------------------------------------
 */
const ContainerFlex = DefaultFlex

ContainerFlex.propTypes = {
  isAlignCenter: PropTypes.bool,
  isSpaceBetween: PropTypes.bool,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string
}

ContainerFlex.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

export default ContainerFlex

/**
 * -------------------------------------
 * FooterFlex - for footer tag
 * @function
 * -------------------------------------
 */
export const FooterFlex = ContainerFlex.withComponent('footer')
