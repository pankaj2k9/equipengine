import css from "utils/css"
import Panel from "base_components/Panel"

/**
 * -------------------------------------
 * Default panel settings component
 * -------------------------------------
 */
const PanelMainSettings = css`
  &:first-child {
    padding-top: 0;
  }

  header {
    margin-bottom: 0.8em;
  }

  @media screen and (min-width: 768px) {
    width: 50%;

    header {
      margin-bottom: 1em;
    }
  }
`(Panel)

export default PanelMainSettings
