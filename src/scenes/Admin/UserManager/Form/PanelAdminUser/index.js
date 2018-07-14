import Panel from "base_components/Panel"

export default Panel.extend`
  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1450px) {
    width: 75%;
  }

  @media screen and (max-width: 1350px) {
    min-width: 650px;
  }

  @media screen and (max-width: 767px) {
    min-width: unset;
  }
`
