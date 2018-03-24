import defaultFlexStyles from './styles'

/**
 * -------------------------------------
 * ContainerFlex - for div tag. Based on the default flex styles.
 * @function
 * -------------------------------------
 */
const ContainerFlex = defaultFlexStyles('div')

export {
  ContainerFlex as default,
  defaultFlexStyles // create styled-components based on this styles
}
