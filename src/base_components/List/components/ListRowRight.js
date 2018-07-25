import PropTypes from "prop-types"
import styled from "styled-components"

const ListRowRight = styled.div`
  margin-top: 1em;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`

ListRowRight.defaultProps = {
  className: ""
}

ListRowRight.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  className: PropTypes.string
}

export default ListRowRight
