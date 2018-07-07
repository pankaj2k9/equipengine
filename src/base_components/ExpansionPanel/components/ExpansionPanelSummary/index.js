import React from "react"

import { Root, Subtitle, Title, ExpandIcon, CollapseIcon } from "./elements"

const ExpansionPanelSummary = ({
  expanded,
  title,
  subtitle,
  children,
  onToggleExpansion
}) => (
  <Root onClick={onToggleExpansion}>
    <div>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      {children}
    </div>
    {expanded ? (
      <span>
        <CollapseIcon />
      </span>
    ) : (
      <span>
        <ExpandIcon />
      </span>
    )}
  </Root>
)

export default ExpansionPanelSummary
