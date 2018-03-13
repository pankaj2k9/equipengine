import styled from 'styled-components'

// TODO: Think of solution on how to make this function as point-free
/**
 * -------------------------------------
 * Header actions styles
 * -------------------------------------
 */
export const headerActionsStyles = (Wc) => styled(Wc)`
  border-bottom: 1px solid #D8D8D8;
  padding-bottom: 1em;
  margin-bottom: 1.8em;
  display: flex;
  justify-content: flex-end;
`

/**
  *
  * -------------------------------------
  * List actions styles
  * -------------------------------------
*/
export const listActionsStyles = (Wc) => styled(Wc)`
  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid #CBCBCB;
    border-radius: 4px;
    padding: 1em;
    color: #D8D8D8;
    margin-bottom: 1em;

    i {
      font-size: 1.4rem;
    }

    div:first-child {
      i {
        margin-right: 0.7em;
      }

      > div {
          span {
            color: #D8D8D8;
          }

          p {
            color: #111111;
            font-size: 1rem;
            margin-top: 0.4em;
          }
      }
    }

    div:last-child {
      button:first-child {
        margin-right: 0.7em;
      }
    }
  }

  @media screen and (min-width: 768px) {
    li {
      align-items: center;
      flex-direction: row;
    }

  }
`