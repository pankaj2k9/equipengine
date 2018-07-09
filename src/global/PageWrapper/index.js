import React, { Component } from "react"
import ContainerFlex from "base_components/ContainerFlex"
import PageCenterer from "base_components/PageCenterer"
import styled from "styled-components"

import FixedBackIconButton from "../FixedBackIconButton"

class PageWrapper extends Component {
  render() {
    const {
      className,
      icon,
      title,
      disableBack,
      disableMargin,
      actionBar,
      header
    } = this.props
    return (
      <React.Fragment>
        {!disableBack && <FixedBackIconButton />}
        <PageCenterer
          className={className}
          margin={disableMargin ? "0" : "3em"}
        >
          {header}
          {(title || icon) && (
            <ContainerFlex isAlignCenter isSpaceBetween>
              <h4 className={`${className}__header`}>
                {icon}
                {icon && <span className={`${className}__delimiter`} />}
                {title}
              </h4>
              {actionBar}
            </ContainerFlex>
          )}
          {this.props.children}
        </PageCenterer>
      </React.Fragment>
    )
  }
}

export default styled(PageWrapper)`
  &__header {
    margin-top: 0;
    font-weight: 400;
    color: #80808b;
  }

  &__delimiter {
    margin: 0 7px;
  }
`
