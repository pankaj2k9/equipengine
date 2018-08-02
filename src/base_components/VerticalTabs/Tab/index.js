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

  handleTabClick = () => {
    // Smooth scrolling with timeout is added here
    // Cause after page refresh (due to scroll in componentDidMount) it scrolled from the start and not obvoius on UI
    ReactDOM.findDOMNode(this).scrollIntoView({
      block: "center",
      behavior: "smooth"
    })
    setTimeout(() => this.props.onTabClick(this.props.tab), 200)
  }

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
