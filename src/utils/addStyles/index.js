import styled from 'styled-components'
import { curry, identical, ifElse, type, compose } from 'ramda'

/**
 * ---------------------------------------------------------------------------------------
 * css :: String -> {String | Component} -> Component
 *
 * A higher-order component which add the given styles in a given Component or html tag string
 * @param {String} styles A template literal string that defines the styles of component.
 * @param {Function} Component A component to transform or created
 * @return {Function} New Component
 * ---------------------------------------------------------------------------------------
 */
const css = curry((styles, Component) => {
  // create styled component based on the given Component
  const createStyledComponent =
          ifElse(
            compose(identical('Function'), type),
            (Component) => styled(Component)`${styles}`, // OnTrue, create styled component
            (Component) => styled[Component]`${styles}` // OnFalse, create styled component based on string.
          )
  return createStyledComponent(Component)
})

export default css

/**
 * ---------------------------------------------------------------------------------------
 * extendCss :: String -> Component -> Component
 *
 * A higher-order component which extend or override styles to the given Component
 * @param {String} styles A template literal string that defines the styles of component.
 * @param {Function} Component A component to extend or override
 * @return {Function} New Component
 * ---------------------------------------------------------------------------------------
 */
export const extendCss = curry((styles, Component) => Component.extend`${styles}`)
