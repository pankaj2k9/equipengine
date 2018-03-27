import css from 'utils/css'

export default css`
  h1, h2, h3, h4 {
    font-family: "Avenir Next", sans-serif;
    font-weight: 800;
  }
`

/**
 * -------------------------------------
 * Styles for HeaderHome
 * @function
 * -------------------------------------
 */
export const headerHomeStyles = css`
  background-color: #2F3036;

  @media screen and (min-width: 768px) {
    padding: 14px 35px 0px;
  }
`

/**
 * -------------------------------------
 * Styles for MainHome
 * @function
 * -------------------------------------
 */
export const mainHomeStyles = css`
  section {
    padding: 3em 0;

    h3 {
      margin-top: 0;
      text-align: center;
      font-size: 1.3rem;
      color: #000000;
    }
  }

  @media screen and (min-width: 768px) {
    section {
      padding: 6.2em 0;

      h3 {
        font-size: 1.74rem;
      }
    }
}
`
