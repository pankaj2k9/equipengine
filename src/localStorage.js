/**
 * Load the state which is persisted on the local storage.
 * @return {Object} state of the app.
 */
export const loadState = () => {
  // we will wrap our code to a try and catch statement because if the browser of the user
  // is not allowring the local storage, it will fail.
  try {
    // we will get the value based on the key on the local storage of the browser.
    const serializedState = window.localStorage.getItem('state')
    // we will check it if the serialzedState is empty.
    if (serializedState === null) {
      return undefined
    }

    // convert the JSON on the javascript object format.
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

/**
 * This will save the state on the localStorage.
 *
 * @param {Object} state is the input data on the key 'state'
 * @return {void}
 */
export const saveState = (state) => {
  try {
    // we will convert all the input state into a JSON format. - JSON.stringify is an expensive function.
    const serializedState = JSON.stringify(state)
    // save the state on the key of 'state' to the localStorage.
    window.localStorage.setItem('state', serializedState)
  } catch (err) {
    //console.log(err)
  }
}
