import css from "utils/css"

/**
 * -------------------------------------
 * Styles for TabOrganisationSettings
 * @function
 * -------------------------------------
 */
export const tabOrganisationSettingsStyles = css`
  .nav-tabs {
    display: flex;
    overflow: auto;

    li > a:last-child {
      height: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .nav-tabs,
    .tab-content {
      padding: 0 35px;
    }

    .nav-tabs {
      overflow: hidden;
    }
  }
`
