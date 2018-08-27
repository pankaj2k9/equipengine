import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
  padding: 3em 2%;

  @media screen and (min-width: 768px) {
    padding: 3em 2.571em;
    display: flex;
  }
`

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
}

export default Container
