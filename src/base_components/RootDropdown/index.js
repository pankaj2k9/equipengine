import React, { Component } from "react"
import { isNotNil } from "ramda-adjunct"
// components
import StyledSelect from "./styles"
import dropdown from "./propTypes"

class Dropdown extends Component {
  constructor(props) {
    super(props)
    const selectedOption =
      props.value &&
      props.options &&
      props.options.find(option => option.value === props.value)
    this.state = {
      selectedOption
    }
  }

  handleChange = selectedOption => {
    this.props.onChange(selectedOption)
    this.setState({ selectedOption })
  }

  render() {
    const { selectedOption } = this.state
    const { name, options, className, placeholder } = this.props
    const selectValue = isNotNil(selectedOption) && selectedOption.value
    return (
      <StyledSelect
        name={name}
        value={selectValue}
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
