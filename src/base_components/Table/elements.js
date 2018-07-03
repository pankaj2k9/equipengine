import styled from "styled-components"

// Add column widths in percentage
// See https://github.com/DevExpress/devextreme-reactive/issues/795
const calculateColumnWidths = ({ columnsWidths }) => {
  if (!columnsWidths || !Array.isArray(columnsWidths)) {
    return ""
  }
  return columnsWidths.reduce((text, column, index) => {
    if (column.width) {
      text += `
        col:nth-child(${index + 1}) {
          width: ${column.width};
        }
      `
    }
    return text
  }, ``)
}

export const Root = styled.div`
  .panel {
    border-top: none;
    border-bottom: 1px solid #ddd;
    box-shadow: none;
  }
  .table {
    min-width: 300px !important;
  }
  td {
    font-size: ${props => props.rowFontSize || "14px"};
  }
  th {
    border: none !important;
    font-size: ${props => props.headerRowFontSize || "12px"};
    font-weight: 400;
    color: #636363;
    text-transform: uppercase;
  }
  tbody tr {
    transition: 300ms ease-in;
  }
  tbody tr:hover {
    background: #f2f3f6;
  }
  ${props => calculateColumnWidths(props)};
`
