import React, { Component } from 'react';

const subscribingOnCourses = WrappedComponent => {
  class EnhancedCourses extends Component {
    constructor() {
      super();
      this.state = {
        courses: []
      };
    }

    render() {
      return <WrappedComponent {...this.props} courses={this.state.courses} />;
    }
  }

  return EnhancedCourses;
};

export default subscribingOnCourses;
