import React, { Component } from "react"

import StyledSelect from "./styles"
import dropdown from "./propTypes"

class Dropdown extends Component {
  handleChange = selectedOption => {
    const { onChange } = this.props

    onChange(selectedOption)
  }

  render() {
    const { name, options, className, placeholder, value } = this.props

    return (
      <StyledSelect
        name={name}
        value={value}
        onChange={this.handleChange}
        options={options}
        className={className}
        placeholder={placeholder}
        searchable={false}
        clearable={false}
      />
    )
  }
}

Dropdown.propTypes = dropdown.props
Dropdown.defaultProps = dropdown.default

export default Dropdown
