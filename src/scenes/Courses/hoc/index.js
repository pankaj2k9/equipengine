import React, { Component } from 'react';

const subscribingOnCourses = WrappedComponent => {
  class EnhancedCourses extends Component {
    constructor() {
      super();
      this.state = {
        courses: [
          {
            title: 'Communication and Culture',
            subTitle:
              'This group is for people who are in level 3 pathway in the Connect Program.',
            url: 'communication-and-culture'
          },
          {
            title: 'Becoming Equipped to Communicate',
            subTitle:
              'This group is for people who are in level 3 pathway in the Connect Program.',
            url: 'becoming-equipped-to-communicate'
          }
        ]
      };
    }

    render() {
      return <WrappedComponent {...this.props} courses={this.state.courses} />;
    }
  }

  return EnhancedCourses;
};

export default subscribingOnCourses;
