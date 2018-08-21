import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const ListRow = styled.li`
  display: block;
  padding: 1.714em 0;
  background-color: ${props => props.active && props.theme.transparentGray};
  transition: all 100ms ease-in;

  ${props =>
    props.onClick &&
    css`
      &:hover {
        color: ${props => props.theme.gray};
        cursor: pointer;
      }
    `};

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

ListRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default ListRow
