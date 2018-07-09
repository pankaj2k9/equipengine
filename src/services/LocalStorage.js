const LOCAL_AUTH = "equipengine_auth"

export const getLocalAuth = () => {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_AUTH))
  } catch (e) {
    return null
  }
}

export const setLocalAuth = ({ auth }) =>
  localStorage.setItem(LOCAL_AUTH, JSON.stringify(auth))

export const deleteLocalAuth = () => localStorage.removeItem(LOCAL_AUTH)
