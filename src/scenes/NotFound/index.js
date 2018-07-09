import React from "react"
import { Link } from "react-router-dom"

import PageCenterer from "base_components/PageCenterer"

const NotFound = () => (
  <PageCenterer>
    <h4>Page Not Found</h4>
    <div>Sorry, this page not found.</div>
    <div>
      Try to go <Link to="/">home</Link> and find the page you need again.
    </div>
  </PageCenterer>
)

export default NotFound
