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
  const { auth } = store.getState()
  if (auth && auth.token) {
    config.headers.authorization = auth.token
  }
  return Promise.resolve(config)
})

export { client }

export * from "./Auth"
export * from "./Activities"
export * from "./Groups"
