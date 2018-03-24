import css from 'utils/css'
import { defaultFlexStyles } from 'base_components/ContainerFlex'

// Styles for FooterTotalWeights
export default css`
  padding: 1.2em 1.2em 1.2em 0;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 1.8em;

  button {
    align-self: flex-end;
    width: 140px;
  }

  span {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 0.6em;
  }
`

// default flex styles is used for creating styled component based on the styles.
export const FooterFlex = defaultFlexStyles('footer')

// for label component
export const LabelTotal = css`
  display: block;
  text-align: center;
  background-color: #e9e9e9;
  font-size: 1.5rem;
  color: ${(props) => props.color};
`('label')
