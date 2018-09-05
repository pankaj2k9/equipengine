import css from "utils/css"

/**
 * -------------------------------------
 * Styles for Breadcrumbs
 * @function
 * -------------------------------------
 */
export default css`
  padding: ${({ padding }) => padding};
  border-bottom: 1px solid #dadada;
  z-index: 1;

  a.active {
    color: #aaaaaa;

    &:hover {
      color: #338ffc;
    }
  }

  span {
    text-transform: capitalize;
  }

  .Breadcrumbs__separator {
    margin: 0 0.2em;
    color: #aaaaaa;
  }

  @media screen and (min-width: 768px) {
    padding: 1em 2.286em;
    position: ${({ position }) => position};
    top: 59px;
    background: #fff;
    width: 100%;
  }
`
