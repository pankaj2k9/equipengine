import React, { Component } from 'react'
import PropTypes from 'prop-types'

const toggleSidebar = (WrappedComponent) => {
  class ToggleSidebar extends Component {
    static propTypes = {
      location: PropTypes.object.isRequired
    };

    state = {
      isSidebarOpen: false
    };

    // opening the sidebar
    openSidebar = () =>
      this.setState({
        isSidebarOpen: true
      });

    // closing the sidebar
    closeSidebar = (e) => {
      // we only want to update the state when the sidebar wrapper is clicked
      // if the child of the sidebar is clicked, we dont want to close the sidebar
      if (e.target === e.currentTarget) {
        this.setState({
          isSidebarOpen: false
        })
      }
    };

    componentWillReceiveProps(nextProps) {
      // we need to check here if the key of location is changed.
      // if changed close the sidebar.
      if (nextProps.location.key !== this.props.location.key) {
        this.setState({})
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          isOpen={this.state.isSidebarOpen}
          openSidebar={this.openSidebar}
          closeSidebar={this.closeSidebar}
        />
      )
    }
  }

  return ToggleSidebar
}

export default toggleSidebar
