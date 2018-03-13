import styled from 'styled-components'
import RootButtonAdd from 'base_components/ButtonAdd'

/**
 * -------------------------------------
 * add styles in TabsLesson
 * -------------------------------------
 */
export const tabsLessonStyles = (Wc) => styled(Wc)`
  .TabsLesson {
    margin-top: 1.4em;
  }

  @media screen and (min-width: 768px) {
    margin-left: 0;
    padding: 16px 0;

    .TabsLesson {
      margin-top: 20px;

      .nav-tabs, .tab-content {
        padding: 0 35px;
      }
    }
  }
`

export const ButtonAdd = styled(RootButtonAdd)`
  margin-right: 0;
  border: 1px solid #979797;
  background: transparent;
  color: #000000;

  &:hover {
    background-color: #e2e2e2;
    color: #000000;
  }
`
