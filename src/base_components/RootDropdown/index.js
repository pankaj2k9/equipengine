import React, { Component } from 'react'
import { isNotNil } from 'ramda-adjunct'
//
import Select from 'react-select'
import dropdown from './propTypes'

class Dropdown extends Component {
  state = {
    selectedOption: ''
  }

  handleChange = (selectedOption) => this.setState({ selectedOption })

  render () {
    const { selectedOption } = this.state
    const { name, options, className } = this.props
    const selectValue = isNotNil(selectedOption) && selectedOption.value
    return (
      <Select
        name={name}
        value={selectValue}
        onChange={this.handleChange}
        options={options}
        className={className}
      />
    )
  }
}

Dropdown.propTypes = dropdown.props
Dropdown.defaultProps = dropdown.default

export default Dropdown
