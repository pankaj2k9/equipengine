import React, { Component } from "react"
import ReactDOM from "react-dom"

import { ListRow } from "base_components/List"

export default class Tab extends Component {
  componentDidMount() {
    if (this.props.active) {
      ReactDOM.findDOMNode(this).scrollIntoView({
        block: "center"
      })
    }
  }

  handleTabClick = () => this.props.onTabClick(this.props.tab)

  render() {
    const { active, tab, tabFormatter } = this.props
    return (
      <ListRow active={active} onClick={this.handleTabClick}>
        {tabFormatter && typeof tabFormatter === "function"
          ? tabFormatter(tab)
          : tab}
      </ListRow>
    )
  }
}
