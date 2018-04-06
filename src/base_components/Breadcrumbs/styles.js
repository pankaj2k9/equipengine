import css from 'utils/css'

/**
 * -------------------------------------
 * Styles for Breadcrumbs
 * @function
 * -------------------------------------
 */
export default css`
  padding: ${({padding}) => padding};
  border-bottom: 1px solid #DADADA;
  z-index: 1;

  a.active {
    color: #AAAAAA;

    &:hover{
        color: #338FFC;
    }
  }

  span {
    text-transform: capitalize;
  }

  .Breadcrumbs__separator {
    margin: 0 0.2em;
    color: #AAAAAA;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 35px;
    position: ${({position}) => position};
    top: 68px;
    background: #fff;
    width: 100%;
  }
`
