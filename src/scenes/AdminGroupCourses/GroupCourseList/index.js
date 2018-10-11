import React from "react"
import { bindActionCreators } from "redux"
import { compose, lifecycle, pure, withHandlers, withState } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroller"
// components
import Loading from "base_components/Loading"
import { Layout, Header, CourseListCell, CourseTitle } from "./elements"
import { fetchMoreGroupCourses } from "../thunks"
import { selectors } from "../selectors"
import StatusCircle from "base_components/StatusCircle"
import {
  DateCellFormatter,
  SettingsButtonCellFormatter,
  DetailsButtonCellFormatter
} from "base_components/Table"

const GroupCoursesList = ({
  courses,
  className,
  handleLoadMore,
  pagination,
  isFetchingGroupCourses,
  groupCourseSettings,
  onUpdateGroupCourseSettings,
  onCourseClick
}) => {
  return (
    <div className={className}>
      {isFetchingGroupCourses ? (
        <Loading />
      ) : (
        <div>
          <Layout>
            <Header width="45%" align="left">
              Course Name
            </Header>
            <Header width="15%" align="center">
              Date Added
            </Header>
            <Header width="15%" align="center">
              Status
            </Header>
            <Header width="10%" />
            <Header width="15%" />
          </Layout>
          <InfiniteScroll
            pageStart={1}
            loadMore={handleLoadMore}
            hasMore={
              pagination && pagination.total_pages > pagination.current_page
            }
            initialLoad={false}
            useWindow={true}
            loader={<Loading />}
            useCapture={true}
          >
            {courses.map(course => {
              const groupCourseSetting = groupCourseSettings.find(
                groupCourseSetting => groupCourseSetting.course_id === course.id
              )

              return (
                <Layout key={course.id} hover>
                  <CourseListCell width="45%" align="left">
                    <CourseTitle>{course.title}</CourseTitle>
                  </CourseListCell>

                  <CourseListCell width="15%">
                    <DateCellFormatter date={new Date(course.created_at)} />
                  </CourseListCell>

                  <CourseListCell width="15%" fontSize="16px">
                    <StatusCircle state={groupCourseSetting.status} />
                  </CourseListCell>

                  <CourseListCell width="10%" fontSize="16px" align="right">
                    <SettingsButtonCellFormatter
                      onSubmit={onUpdateGroupCourseSettings}
                      course={course}
                      groupCourseSetting={groupCourseSetting}
                    />
                  </CourseListCell>

                  <CourseListCell width="15%" align="left">
                    <DetailsButtonCellFormatter
                      onClick={() => onCourseClick(course)}
                    />
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
    pagination: selectors.selectGroupCoursesPagination(),
    isFetchingGroupCourses: selectors.selectIsFetchingGroupCourses()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchMoreGroupCourses
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  withRouter,
  withState("groupId", null, ({ location, match }) =>
    // retrieve group id from url if provided
    location.pathname.replace(match.url, "").replace("/", "")
  ),
  withHandlers({
    handleLoadMore: ({ groupId, fetchMoreGroupCourses }) => page => {
      fetchMoreGroupCourses({ groupId, current_page: page })
    }
  }),
  pure
)(GroupCoursesList)
