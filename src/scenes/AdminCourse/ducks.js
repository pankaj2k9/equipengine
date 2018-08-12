import Immutable from "seamless-immutable"

// Types
export const types = {
  //
  // FETCH_COURSE
  //
  FETCH_COURSE_REQUEST: "equipengine-admin/FETCH_COURSE_REQUEST",
  FETCH_COURSE_SUCCESS: "equipengine-admin/FETCH_COURSE_SUCCESS",
  FETCH_COURSE_ERROR: "equipengine-admin/FETCH_COURSE_ERROR",
  //
  // FETCH_TUTORIALS
  //
  FETCH_TUTORIALS_REQUEST: "equipengine-admin/FETCH_TUTORIALS_REQUEST",
  FETCH_TUTORIALS_SUCCESS: "equipengine-admin/FETCH_TUTORIALS_SUCCESS",
  FETCH_TUTORIALS_ERROR: "equipengine-admin/FETCH_TUTORIALS_ERROR",
  //
  // CREATE_TUTORIAL
  //
  CREATE_TUTORIAL_REQUEST: "equipengine-admin/CREATE_TUTORIAL_REQUEST",
  CREATE_TUTORIAL_SUCCESS: "equipengine-admin/CREATE_TUTORIAL_SUCCESS",
  CREATE_TUTORIAL_ERROR: "equipengine-admin/CREATE_TUTORIAL_ERROR",
  //
  // SELECT_TUTORIAL
  //
  SELECT_TUTORIAL: "equipengine-admin/SELECT_TUTORIAL",
  //
  // FETCH_TASKS
  //
  FETCH_TASKS_REQUEST: "equipengine-admin/FETCH_TASKS_REQUEST",
  FETCH_TASKS_SUCCESS: "equipengine-admin/FETCH_TASKS_SUCCESS",
  FETCH_TASKS_ERROR: "equipengine-admin/FETCH_TASKS_ERROR",
  //
  // CREATE_TUTORIAL
  //
  CREATE_TASK_REQUEST: "equipengine-admin/CREATE_TASK_REQUEST",
  CREATE_TASK_SUCCESS: "equipengine-admin/CREATE_TASK_SUCCESS",
  CREATE_TASK_ERROR: "equipengine-admin/CREATE_TASK_ERROR"
}

const initialState = Immutable({
  isFetchingCourse: false,
  course: null,
  isFetchingTutorials: false,
  tutorials: [],
  tutorialsPagination: null,
  isCreatingTutorial: false,
  selectedTutorialId: null,
  isFetchingTasks: false,
  tasks: [],
  isCreatingTask: false
})

/**
 * Change task format from `task.videos[0].video_link` to `task.video_link`
 * Cause only one video per task is supported by UI
 */
const mapTaskVideos = task => {
  if (
    !Array.isArray(task.videos) ||
    task.videos.length === 0 ||
    !task.videos[0].video_link
  ) {
    return task
  }
  task.video_link = task.videos[0].video_link
  return task
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_TUTORIALS
    //
    case types.FETCH_TUTORIALS_REQUEST:
      return state.merge({
        isFetchingTutorials: true
      })
    case types.FETCH_TUTORIALS_SUCCESS:
      return state.merge({
        isFetchingTutorials: false,
        tutorials: action.payload.tutorials,
        tutorialsPagination: action.payload.tutorialsPagination
      })
    case types.FETCH_TUTORIALS_ERROR:
      return state.merge({
        isFetchingTutorials: false,
        tutorials: [],
        tutorialsPagination: null
      })

    //
    // FETCH_COURSE
    //
    case types.FETCH_COURSE_REQUEST:
      return state.merge({
        isFetchingCourse: true
      })
    case types.FETCH_COURSE_SUCCESS:
      return state.merge({
        isFetchingCourse: false,
        course: action.payload.course
      })
    case types.FETCH_COURSE_ERROR:
      return state.merge({
        isFetchingCourse: false,
        course: null
      })

    //
    // CREATE_TUTORIAL
    //
    case types.CREATE_TUTORIAL_REQUEST:
      return state.merge({
        isCreatingTutorial: true
      })
    case types.CREATE_TUTORIAL_SUCCESS:
      return state.merge({
        isCreatingTutorial: false,
        tutorials: state.tutorials.concat(action.payload.tutorial)
      })
    case types.CREATE_TUTORIAL_ERROR:
      return state.merge({
        isCreatingTutorial: false
      })

    //
    // SELECT_TUTORIAL
    //
    case types.SELECT_TUTORIAL:
      return state.merge({
        selectedTutorialId: action.payload.selectedTutorialId
      })

    //
    // FETCH_TUTORIALS
    //
    case types.FETCH_TASKS_REQUEST:
      return state.merge({
        isFetchingTasks: true
      })
    case types.FETCH_TASKS_SUCCESS:
      return state.merge({
        isFetchingTasks: false,
        tasks: action.payload.tasks.map(mapTaskVideos)
      })
    case types.FETCH_TASKS_ERROR:
      return state.merge({
        isFetchingTasks: false,
        tasks: []
      })

    //
    // CREATE_TUTORIAL
    //
    case types.CREATE_TASK_REQUEST:
      return state.merge({
        isCreatingTask: true
      })
    case types.CREATE_TASK_SUCCESS:
      return state.merge({
        isCreatingTask: false,
        tasks: state.tasks.concat(mapTaskVideos(action.payload.task))
      })
    case types.CREATE_TASK_ERROR:
      return state.merge({
        isCreatingTask: false
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_COURSE
  //
  fetchCourseRequest: () => ({
    type: types.FETCH_COURSE_REQUEST
  }),
  fetchCourseSuccess: ({ course }) => ({
    type: types.FETCH_COURSE_SUCCESS,
    payload: { course }
  }),
  fetchCourseError: () => ({
    type: types.FETCH_COURSE_ERROR
  }),
  //
  // FETCH_TUTORIALS
  //
  fetchTutorialsRequest: () => ({
    type: types.FETCH_TUTORIALS_REQUEST
  }),
  fetchTutorialsSuccess: ({ tutorials, tutorialsPagination }) => ({
    type: types.FETCH_TUTORIALS_SUCCESS,
    payload: { tutorials, tutorialsPagination }
  }),
  fetchTutorialsError: () => ({
    type: types.FETCH_TUTORIALS_ERROR
  }),
  //
  // CREATE_TUTORIAL
  //
  createTutorialRequest: () => ({
    type: types.CREATE_TUTORIAL_REQUEST
  }),
  createTutorialSuccess: ({ tutorial }) => ({
    type: types.CREATE_TUTORIAL_SUCCESS,
    payload: { tutorial }
  }),
  createTutorialError: () => ({
    type: types.CREATE_TUTORIAL_ERROR
  }),
  //
  // CREATE_TUTORIAL
  //
  selectTutorial: ({ selectedTutorialId }) => ({
    type: types.SELECT_TUTORIAL,
    payload: { selectedTutorialId }
  }),
  //
  // FETCH_TASKS
  //
  fetchTasksRequest: () => ({
    type: types.FETCH_TASKS_REQUEST
  }),
  fetchTasksSuccess: ({ tasks }) => ({
    type: types.FETCH_TASKS_SUCCESS,
    payload: { tasks }
  }),
  fetchTasksError: () => ({
    type: types.FETCH_TASKS_ERROR
  }),
  //
  // CREATE_TASK
  //
  createTaskRequest: () => ({
    type: types.CREATE_TASK_REQUEST
  }),
  createTaskSuccess: ({ task }) => ({
    type: types.CREATE_TASK_SUCCESS,
    payload: { task }
  }),
  createTaskError: () => ({
    type: types.CREATE_TASK_ERROR
  })
}
