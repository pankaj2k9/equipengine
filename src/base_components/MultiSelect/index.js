import React from "react"
import Select from "react-select"

class MultiSelect extends React.Component {
  state = {
    stayOpen: false,
    value: []
  }

  constructor(props) {
    super(props)

    this.state.options = props.options
  }

  handleSelectChange = value => {
    this.props.onChange(value)
    this.setState({ value })
  }

  render() {
    const { disabled, value, options } = this.state

    return (
      <Select
        closeOnSelect={false}
        disabled={disabled}
        multi
        onChange={this.handleSelectChange}
        options={options}
        placeholder="Select your favourite(s)"
        removeSelected={true}
        simpleValue
        value={value}
      />
    )
  }
}

export default MultiSelect
