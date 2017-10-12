import React, { Component } from 'react';
import Navbar from 'base_components/Navbar';
import Sidebar from 'base_components/Sidebar';

class SidebarTransition extends Component {
  constructor() {
    super();
    this.state = {
      isSidebarOpen: false
    };
  }

  // opening the sidebar
  openSidebar = () =>
    this.setState({
      isSidebarOpen: true
    });

  // closing the sidebar
  closeSidebar = e => {
    // we only want to update the state when the sidebar wrapper is clicked
    // if the child of the sidebar is clicked, we dont want to close the sidebar
    if (e.target.className == 'Sidebar isOpen') {
      this.setState({
        isSidebarOpen: false
      });
    }
  };
  render() {
    return (
      <div>
        <Navbar onOpenSidebar={this.openSidebar} />
        <Sidebar
          isOpen={this.state.isSidebarOpen}
          onCloseSidebar={this.closeSidebar}
        />
      </div>
    );
  }
}

export default SidebarTransition;
