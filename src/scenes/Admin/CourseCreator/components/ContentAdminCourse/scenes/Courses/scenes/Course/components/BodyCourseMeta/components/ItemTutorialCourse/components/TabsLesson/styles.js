import css from "utils/css"
import RootButtonAdd from "base_components/ButtonAdd"

/**
 * -------------------------------------
 * add styles in TabsLesson
 * -------------------------------------
 */
export const tabsLessonStyles = css`
  .TabsLesson {
    margin-top: 1.4em;
  }

  @media screen and (min-width: 768px) {
    margin-left: 0;
    padding: 16px 0;

    .TabsLesson {
      margin-top: 22px;

      .nav-tabs,
      .tab-content {
        padding: 0 35px;
      }
    }
  }
`

/**
 * -------------------------------------
 * ButtonAdd styled-components.
 * -------------------------------------
 */
export const ButtonAdd = css`
  margin-right: 0;
`(RootButtonAdd)
