import axios from "axios"

const checkStatus = status => status >= 200 && status < 300

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json"
  },
  validateStatus: checkStatus
})

export { client }

export * from "./Auth"
export * from "./Groups"
