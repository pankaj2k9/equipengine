import Panel from "base_components/Panel"
import RootButton from "base_components/RootButton"
import { Label as BaseLabel } from "base_components/RootForm"

export const Root = Panel.extend`
  border-bottom: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;
    width: 100%;
  }

  @media screen and (min-width: 1450px) {
    width: 75%;
  }

  @media screen and (max-width: 1350px) {
    min-width: 550px;
  }

  @media screen and (max-width: 767px) {
    min-width: unset;
  }
`

export const Button = RootButton.extend`
  height: 28px;
  padding: 0;
  padding-top: 2px;
`

export const Label = BaseLabel.extend`
  max-width: initial !important;
`
