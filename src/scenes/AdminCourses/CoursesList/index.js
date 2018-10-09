import React from "react"
import { bindActionCreators } from "redux"
import { compose, lifecycle, pure, withHandlers } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"
import IconUser from "react-icons/lib/fa/user"
import IconDetails from "react-icons/lib/fa/wrench"
import InfiniteScroll from "react-infinite-scroller"

import Loading from "base_components/Loading"
import DateTime from "base_components/DateTime"
import Button, { IconButton } from "base_components/RootButton"
import { Desktop, Mobile } from "base_components/Responsive"
import { Layout, Header, CourseListCell, CourseTitle, Icon } from "./elements"
import { fetchCourses, fetchMoreCourses } from "../thunks"
import { selectors } from "../ducks"

const CoursesList = ({
  courses,
  className,
  isFetchingCourses,
  handleCourseClick,
  handleLoadMore,
  pagination
}) => {
  return (
    <div className={className}>
      {isFetchingCourses ? (
        <Loading />
      ) : (
        <div>
          <Layout>
            <Header width="40%" align="left">
              Name
            </Header>
            <Header width="15%">Date Added</Header>
            <Header width="15%">Active Users</Header>
            <Header width="15%">Lessons</Header>
            <Header width="20%" />
          </Layout>
          <InfiniteScroll
            pageStart={1}
            loadMore={handleLoadMore}
            hasMore={
              pagination && pagination.total_pages > pagination.current_page
            }
            initialLoad={false}
            loader={<Loading />}
          >
            {courses.map(course => {
              return (
                <Layout key={course.id} hover>
                  <CourseListCell width="40%" align="left">
                    <CourseTitle>{course.title}</CourseTitle>
                    <small>{course.description}</small>
                  </CourseListCell>

                  <CourseListCell width="15%">
                    <DateTime
                      date={new Date(course.created_at)}
                      fontSize="14px"
                      withYear
                      withoutTime
                    />
                  </CourseListCell>

                  <CourseListCell width="15%" fontSize="16px">
                    <span>
                      <Icon>
                        <IconUser />
                      </Icon>
                      {course.active_user_ids && course.active_user_ids.length}
                    </span>
                  </CourseListCell>

                  <CourseListCell width="15%" fontSize="16px">
                    {course.lessons_count}
                  </CourseListCell>

                  <CourseListCell width="20%" align="right">
                    <span>
                      <Mobile>
                        <IconButton
                          onClick={() => handleCourseClick(course.id)}
                        >
                          <IconDetails />
                        </IconButton>
                      </Mobile>
                      <Desktop>
                        <Button
                          secondary
                          onClick={() => handleCourseClick(course.id)}
                        >
                          Details
                        </Button>
                      </Desktop>
                    </span>
                  </CourseListCell>
                </Layout>
              )
            })}
          </InfiniteScroll>
        </div>
      )}
    </div>
  )
}

const mapState = () =>
  createStructuredSelector({
    courses: selectors.selectCourses(),
    pagination: selectors.selectCoursesPagination(),
    isFetchingCourses: selectors.selectIsFetchingCourses(),
    searchTerm: selectors.selectSearchTerm()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCourses,
      fetchMoreCourses
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  lifecycle({
    componentDidMount() {
      const { courses, searchTerm } = this.props
      if (!courses || courses.length === 0 || searchTerm) {
        this.props.fetchCourses({
          current_page: 1
        })
      }
    }
  }),
  withRouter,
  withHandlers({
    handleCourseClick: ({ history }) => courseId =>
      history.push(`/secure/admin/course-creator/courses/${courseId}`),
    handleLoadMore: ({ fetchMoreCourses }) => page =>
      fetchMoreCourses({ current_page: page })
  }),
  pure
)(CoursesList)
