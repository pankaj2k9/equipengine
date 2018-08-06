import React, { Component } from "react"
import PropTypes from "prop-types"

// import files
import SearchbarTableCourse from "./SearchbarTableCourse"
import TableCourse from "./TableCourse"

class FilterableTableCourse extends Component {
  constructor() {
    super()
    this.state = {
      courses: [],
      search: undefined
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      courses: nextProps.courses
    })
  }

  handleSearchChange = event => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <div className="FilterableTableCourse">
        <SearchbarTableCourse
          searchValue={this.state.search}
          handleSearchChange={this.handleSearchChange}
        />
        <TableCourse />
      </div>
    )
  }
}

FilterableTableCourse.propTypes = {
  courses: PropTypes.array.isRequired
}

export default FilterableTableCourse
