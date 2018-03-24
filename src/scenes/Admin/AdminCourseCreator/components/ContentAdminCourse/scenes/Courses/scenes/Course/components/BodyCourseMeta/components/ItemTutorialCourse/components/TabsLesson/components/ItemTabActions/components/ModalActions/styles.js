import css, { extendCss } from 'utils/css'

/**
 * -------------------------------------
 * Styles for modal actions
 * @function
 * -------------------------------------
 */
export default css`
  .Select {
    width: 160px;
  }

  .modal-body {
    padding: 0;

    > div {
      padding: 20px 35px;
      border-bottom: 1px solid #d8d8d8;
      margin-bottom: 0;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`

/**
 * -------------------------------------
 * Extend button styles - for ButtonSelect
 * @function
 * -------------------------------------
 */
export const buttonExtendStyles = extendCss`
  color: #BDBDBD;
  border-color: #BDBDBD;
  display: block;
`
