import styled from 'styled-components'

/**
 * -------------------------------------
 * Add styles in LabelGroup
 * -------------------------------------
 */
export const labelGroupStyles = (Wc) => styled(Wc)`
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
 * -------------------------------------
 */
export const listThingsStyles = (Wc) => styled(Wc)`
  border: 1px solid #D8D8D8;
  margin-top: 0.7em;
  padding: 1em;
  border-radius: 4px;

  li {
    padding-bottom: 1.2em;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: #D8D8D8;

    i {
      font-size: 1.4rem;
    }

    span {
      color: #000000;
      margin-left: 1em;
    }
  }
`
