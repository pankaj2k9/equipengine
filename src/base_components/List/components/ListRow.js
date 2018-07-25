import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const ListRow = styled.li`
  border-bottom: 1px solid #dadada;
  display: block;
  padding: 15px 0 20px 0;
  background-color: ${props => props.active && props.theme.lightgray};
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
