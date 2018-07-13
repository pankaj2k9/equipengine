import React, { Component } from "react"
//
import Loading from "base_components/Loading"
import LogoContainer from "base_components/LogoContainer"
import { Root, Centerer, Title } from "./elements"

class AbstractAuthPage extends Component {
  render() {
    const { isPending, title } = this.props
    return (
      <Root>
        <LogoContainer to="/" />
        <Centerer>
          <header>
            <Title>{title}</Title>
          </header>
          {isPending ? <Loading /> : this.props.children}
        </Centerer>
      </Root>
    )
  }
}
export default AbstractAuthPage
