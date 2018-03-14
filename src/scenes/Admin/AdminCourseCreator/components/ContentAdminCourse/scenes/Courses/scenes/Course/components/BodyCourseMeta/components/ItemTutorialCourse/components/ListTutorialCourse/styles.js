/** @module styles */

import ContainerFilterableList from 'scenes/Admin/components/ContainerAdminPanel/components/ContainerFilterableList'
import addStyles from 'utils/addStyles'

/**
 * -------------------------------------
 * ContainerListTutorialCourse styled components
 * @function
 * -------------------------------------
 */
export const ContainerListTutorialCourse = ContainerFilterableList.extend`
  @media screen and (min-width: 768px) {
    position: relative;
  }
`

/**
 * -------------------------------------
 * ListItemTutorial styles
 * @function
 * -------------------------------------
 */
export const listItemTutorialStyles = addStyles(`
  border-bottom: 1px solid #d8d8d8;
  padding: 1.5em 0;

  > div:first-child {
    > i:first-child {
      font-size: 1.2rem;
      color: #d8d8d8;
      margin-right: 12px;
    }

    > img {
      margin-right: 12px;
    }

    > div {
      p {
        font-size: 1rem;
        color: #111111;
        margin-bottom: 0.2em;
      }

      span {
        color: #9fa6ad;
      }
    }
  }

  > div:last-child {
    > form {
      display: flex;
      align-items: center;

      > label,
      > button {
        margin-right: 12px;
      }

      > i {
        color: #afafaf;
        font-size: 1.4rem;
      }
    }
  }

  @media screen and (min-width:768px) {
    padding: 1.5em 1.5em 1.5em 0;
  }
`)
