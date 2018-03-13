import styled from 'styled-components'
import { curry } from 'ramda'

/**
 * ---------------------------------------------------------------------------------------
 * addStyles :: String -> Component -> Component
 *
 * A higher-order component which add the given styles in a given Component
 * @function addStyles
 * @param {String} styles A template literal string that defines the styles of component.
 * @param {Function} Component A component to transform
 * @return {Function} New Component
 * ---------------------------------------------------------------------------------------
 */
export default curry((styles, Component) => styled(Component)`${styles}`)
