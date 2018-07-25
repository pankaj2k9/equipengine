import styled from "styled-components"
import PropTypes from "prop-types"

const ListRowLeft = styled.div`
  p {
    margin-bottom: 0.5em;
  }
  p:first-child {
    font-size: 16px;
    color: #111111;
  }
  p:last-child {
    color: #9fa6ad;
  }
`

ListRowLeft.defaultProps = {
  className: ""
}

ListRowLeft.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string
}

export default ListRowLeft
