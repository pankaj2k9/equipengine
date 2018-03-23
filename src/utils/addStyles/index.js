import styled from 'styled-components'
import { curry, identical, ifElse, type, compose } from 'ramda'

/**
 * TODO:
 * Tag template is syntactic sugar.
 *
 * Tag function - greet`I'm ${name}. I'm ${age} years old.`
 * Normal function - greet(["I'm ", ". I'm ", " years old."], name, age)
 *
 * Change our underlying css and extend api. Instead of normal function, we can make api's as tag function. We need to pass as input the arguments pass to css in styled function by styled-components. For an instance, styled(arguments) - arguments are the input pass in api's function.
 */

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
