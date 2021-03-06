import axios from "axios"
import store from "../store"

const checkStatus = status => status >= 200 && status < 300

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json"
  },
  validateStatus: checkStatus
})

// Add token for every request if provided
client.interceptors.request.use(config => {
  // TODO ask DJ if it is more important to have badly implemented remember be functionallity
  const { login } = store.getState()
  if (login && login.token) {
    config.headers.authorization = login.token
  }
  return Promise.resolve(config)
})

export { client }

export * from "./Activities"
export * from "./AdminCourses"
export * from "./AdminOrganizationSettings"
export * from "./AdminTasks"
export * from "./AdminTutorials"
export * from "./Auth"
export * from "./Comments"
export * from "./Countries"
export * from "./CourseThreads"
export * from "./GroupCourses"
export * from "./Groups"
export * from "./GroupUsers"
export * from "./Messages"
export * from "./Settings"
export * from "./Tasks"
export * from "./Tutorials"
export * from "./Users"
export * from "./Attachments"
export * from "./States"
export * from "./Videos"
export * from "./TeacherGroupActivities"
