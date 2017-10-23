import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconArrowRight from 'react-icons/lib/fa/angle-right';
import IconArrowDown from 'react-icons/lib/fa/angle-down';

import Box from 'base_components/Box';
import CollapsibleCourseHeaderPanel from './components/CollapsibleCourseHeaderPanel';
import bgImage from './course-bg.png';
import './styles.css';

class HeaderCourseMeta extends PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  triggerPanel = e => {
    e.preventDefault();
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { title, description } = this.props.course;
    return (
      <div>
        <Box
          style={{
            backgroundImage: `url(${bgImage})`
          }}
          className="HeaderCourseMeta"
        >
          <header>
            <div>
              <h3>{title}</h3>
              <a onClick={this.triggerPanel}>
                About this course
                <span className="HeaderCourseMeta__button">
                  {this.state.open ? <IconArrowDown /> : <IconArrowRight />}
                </span>
              </a>
            </div>
            <div className="HeaderCourseMeta__completed">
              <div>
                <span>2 of 3</span>
                <span>completed</span>
              </div>
            </div>
          </header>
        </Box>
        <CollapsibleCourseHeaderPanel
          description={description}
          isOpen={this.state.open}
        />
      </div>
    );
  }
}

HeaderCourseMeta.propTypes = {
  course: PropTypes.object.isRequired
};

export default HeaderCourseMeta;
