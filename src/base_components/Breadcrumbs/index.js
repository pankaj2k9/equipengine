import React from "react"
//
import { NavLink } from "react-router-dom"
import { Breadcrumbs as RootBreadcrumbs } from "react-breadcrumbs-dynamic/dist/src"
// assets
import breadCrumbsStyles from "./styles"
import breadCrumbs from "./propTypes"

const Breadcrumbs = breadCrumbsStyles(({ className }) => (
  <div className={className}>
    <RootBreadcrumbs
      separator={<span className="Breadcrumbs__separator"> > </span>}
      item={NavLink}
      finalItem={"span"}
      finalProps={{
        style: { color: "#616161" }
      }}
    />
  </div>
))

Breadcrumbs.propTypes = breadCrumbs.props
Breadcrumbs.defaultProps = breadCrumbs.default

export default Breadcrumbs
