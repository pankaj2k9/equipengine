import css from 'utils/css'
import { defaultFlexStyles } from 'base_components/ContainerFlex'

/**
 * -------------------------------------
 * Styles for MastheadHeaderHome
 * @function
 * -------------------------------------
 */
export default css`
  h2, img {
    max-width: 720px;
    width: 100%;
  }

  h2 {
    color: #ffffff;
    font-size: 1.6rem;
    text-align: center;
    margin-top: 1em;
  }

  img {
    object-fit: cover;
    margin-top: 1.7em;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 2rem;
      margin-top: 4em;
      line-height: 1.4;
    }

    a {
      padding: 0.9em 0;
      font-size: 1.1rem;
      width: 173px;
    }
  }
`

/**
 * -------------------------------------
 * SectionFlex styled component
 * @function
 * -------------------------------------
 */
export const SectionFlex = defaultFlexStyles('section')
