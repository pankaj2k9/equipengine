import css, { extendCss } from 'utils/addStyles'
import ContainerFlex from 'base_components/ContainerFlex'
import Dropdown from 'base_components/RootDropdown'

/**
 * -------------------------------------
 * Styles for ListObjectives
 * @function
 * -------------------------------------
 */
export default css(`
  border: 1px solid #d8d8d8;
  border-bottom: 0;

  li {
    padding: 1.2em 0.8em 1.2em;
    border-bottom: 1px solid #d8d8d8;

    .ListItem__title {
      i {
        color: #d8d8d8;
        margin-right: 1.2em;
      }
    }

    .ListItem__action {
      > i {
        color: #afafaf;
        font-size: 1.4rem;
      }
    }
  }
`)

/**
 * -------------------------------------
 * ContainerAction styled components
 * @function
 * -------------------------------------
 */
export const ContainerAction = extendCss(`
  display: flex;
  flex-direction: column;
  margin-right: 2.4em;
  text-align: center;

  label {
    color: #727272;
    font-size: 0.7rem;
    margin-top: 1em;
  }
`, ContainerFlex)

export const DropdownResult = css(`
  width: 128px;
  text-align: left;
`, Dropdown)
