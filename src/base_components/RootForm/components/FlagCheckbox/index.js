import React, { Component } from "react"
import IconFlag from "react-icons/lib/fa/flag"
import styled from "styled-components"

class FlagCheckbox extends Component {
  state = {
    isFlagged: false
  }

  componentDidMount() {
    this.setState({ isFlagged: this.props.isFlagged })
  }

  handleChange = () => {
    const { onClick } = this.props
    const { isFlagged } = this.state

    this.setState({ isFlagged: !isFlagged }, () => {
      onClick(this.state.isFlagged)
    })
  }

  render() {
    const { className } = this.props
    const { isFlagged } = this.state

    return (
      <button className={className} onClick={this.handleChange}>
        <IconFlag className={isFlagged && "flagged"} />
      </button>
    )
  }
}

export default styled(FlagCheckbox)`
  padding: 0;
  margin: 0;

  border: none;
  background-color: transparent;

  color: #d7d7d7;
  font-size: 1.4rem;

  .flagged {
    color: #f44336;
  }
`
