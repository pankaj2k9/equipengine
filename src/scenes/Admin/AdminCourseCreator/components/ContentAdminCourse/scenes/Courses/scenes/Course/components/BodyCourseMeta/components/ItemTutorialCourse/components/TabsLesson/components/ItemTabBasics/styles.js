import css from 'utils/css'

/**
 * -------------------------------------
 * Add styles in LabelGroup
 * @function
 * -------------------------------------
 */
export const labelGroupStyles = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  color: #000000;
`

/**
 * -------------------------------------
 * add styles in ListThingsToDo
 * @function
 * -------------------------------------
 */
export const listThingsStyles = css`
  border: 1px solid #D8D8D8;
  margin-top: 0.7em;
  border-radius: 4px;
  padding-bottom: 4em;

  li{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: #D8D8D8;
    padding: 0.7em;

    i {
      font-size: 1.4rem;
    }

    span {
      color: #000000;
      margin-left: 1em;
    }
  }
`
