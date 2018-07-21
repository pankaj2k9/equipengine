import React from "react"

import "./styles.css"

class CheckboxRound extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value || false
    }
  }

  handleChange = ({ target: { checked } }) => {
    this.setState({
      value: checked
    })
    if (this.props.onChange) {
      this.props.onChange(checked)
    }
  }

  render() {
    const { className } = this.props

    return (
      <div className={`${className} Form__Group--round`}>
        <input
          checked={this.state.value}
          onChange={this.handleChange}
          type="checkbox"
          name="checkbox"
        />
        <label htmlFor="checkbox" />
      </div>
    )
  }
}

export default CheckboxRound
