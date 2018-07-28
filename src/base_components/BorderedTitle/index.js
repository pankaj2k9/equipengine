import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import styled from "styled-components"

import Breadcrumbs from "base_components/Breadcrumbs"

const Title = styled.div`
  text-transform: uppercase;
`

const BorderedTitle = ({ match, title }) => (
  <Fragment>
    {/* For historical reasons breadcrumbs are used for that */}
    <Breadcrumbs />
    <BreadcrumbsItem to={match.url}>
      <Title>{title}</Title>
    </BreadcrumbsItem>
  </Fragment>
)

BorderedTitle.propTypes = {
  match: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default withRouter(BorderedTitle)
