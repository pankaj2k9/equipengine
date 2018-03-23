import styled from 'styled-components'
import { identical, ifElse, type, compose } from 'ramda'

/**
 * ---------------------------------------------------------------------------------------
 * css :: String -> {String | Component} -> Component
 *
 * A tag function which accepts css template string and type of component for creating styled-component.
 * @param {Array[String]} arrStrings Array of strings which include styles for component.
 * @param {Array[Function]} interpolatedFns Array of interporlated function which are included in template literal.
 * @param {Function} Component A component to transform or created.
 * @return {Function} Styled component.
 * ---------------------------------------------------------------------------------------
 */
const css = (arrStrings, ...interpolatedFns) =>
  ifElse(
    compose(identical('Function'), type),
    (Component) => styled(Component)(arrStrings, ...interpolatedFns), // OnTrue, create styled component
    (Component) => styled[Component](arrStrings, ...interpolatedFns) // OnFalse, create styled component based on string.
  )

export default css

/**
 * ---------------------------------------------------------------------------------------
 * extendCss :: Array[String] -> Array(Function) -> Component -> Component
 *
 * A tag function which accepts css template string and type of component for overriding the styles of given component.
 * @param {Array[String]} arrStrings Array of strings which include styles for component.
 * @param {Array[Function]} interpolatedFns Array of interporlated function which are included in template literal.
 * @param {Function} Component A component to transform or created.
 * @return {Function} Styled component
 * ---------------------------------------------------------------------------------------
 */
export const extendCss =
  (arrStrings, ...interpolatedFns) =>
    (Component) => Component.extend(arrStrings, ...interpolatedFns)
