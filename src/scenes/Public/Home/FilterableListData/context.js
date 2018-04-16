import createStore from 'utils/context'
import { createSelector } from 'reselect'
import { values, filter, equals, compose, prop, append, mergeAll, merge } from 'ramda'
import { isNotEmpty } from 'ramda-adjunct'
import update from 'immutability-helper'
// api request
import api from './api'

// Rule of thumb: When using logger utility, the updater should be passed to the produce has name.
// So that we can display to our logger what updater is involve in a given updater operation.
// Function signature sample
// sample :: Receiver function -> Updater function

// Updater is a pure function

/**
 * pending :: Object -> Object
 *
 * An Updatear function which shows what state is gonna be updated. It receives the state and props which are passed to Provider component. This updater function under the hood is using this.setState of Class Component. Don't directly mutate the state in here.
 * @param {Object} state
 * @param {Object} props
 * @return {Object} stateChange
 */
const pending = (state) => ({
  processRequest: {
    ...state.processRequest,
    pending: true,
    success: false
  }
})

const success = (state) => ({
  processRequest: {
    ...state.processRequest,
    pending: false,
    success: true
  }
})

const errorFetchStudents = (err) => {
  const error = (state) => ({
    processRequest: {
      ...state.processRequest,
      pending: false,
      error: err
    }
  })
  return error
}

// Filter Students
const addStudentFilterStudents = (student) => (state) => ({
  filterStudents: append(student, state.filterStudents) // update our filter students.
})

const getFilterStudents = (students) => (state) => ({
  filterStudents: values(students)
})

const refreshFilterStudents = (state) => ({
  filterStudents: values(state.students)
})

const searchStudents = (search) => {
  const searchChange = (state) => {
    // extract the students object
    const { students } = state

    // check if the firstName value of filterStudents object is equal to search.
    const isFirstnameEqualTo = compose(equals(search), prop('firstName'))
    // filtering array based on the given predicate
    const filterStudents = filter(isFirstnameEqualTo, values(students))

    return {
      filterStudents: isNotEmpty(search) ? filterStudents : values(students)
    }
  }

  return searchChange
}

const successFetchStudents = (students) => {
  const saveStudents = (state) => {
    return mergeAll([
      success(state),
      getFilterStudents(students)(state),
      { students }
    ])
  }
  return saveStudents
}

// TODO: We need to transfer the invocation of the API's / side-effect function to the handler. Our updater function should be Pure function.
// fetchStudents
const fetchStudents = (produce) => {
  // produce pending updater.
  produce(pending)
  api
    .fetchStudents()
    .then(compose(produce, successFetchStudents))
    .catch(compose(produce, errorFetchStudents))
}

// A function which accepts a target object and returns an updater.
const changeInput = (target) => {
  const value = target.type === 'checkbox' ? target.checked : target.value
  const name = target.name

  const inputChange = (state, props) => ({
    fields: update(state.fields, { // using immutability-helper. We update the given property value using computed property syntax.
      [name]: {
        $set: value
      }
    })
  })
  // return the updater.
  return inputChange
}

const resetForm = (state) => ({
  fields: {
    id: '',
    firstName: '',
    lastName: '',
    search: state.fields.search
  }
})

export const addUser = (state) => {
  const { fields: {id, firstName, lastName}, students } = state
  const student = {
    id,
    firstName,
    lastName
  }
  return mergeAll([
    addStudentFilterStudents(student)(state),
    {
      students: {
        ...students,
        [id]: student // add the student to the students object.
      }
    }
  ])
}

// This construct a new stateChange based on the return stateChange of other updater function.
// Updater composition -> An updater function which the return stateChange is based on the other stateChange of 2 or more updaters.
// A function which compose an object - Object composition. - “Favor object composition over class inheritance” the Gang of Four, “Design Patterns: Elements of Reusable Object Oriented Software”
const addUserAndResetForm = (state) =>
  merge(addUser(state), resetForm(state))

// Updater functions
const updater = {
  fetchStudents,
  changeInput,
  resetForm,
  addUser,
  addUserAndResetForm,
  searchStudents,
  refreshFilterStudents
}

// Use the provider API. Create a provider component for student data.
const initialState = {
  students: {},
  filterStudents: [], // filterstudents is used for displaying the students on the table.
  fields: {
    search: '',
    id: '',
    firstName: '',
    lastName: ''
  },
  processRequest: {
    pending: false,
    success: false,
    error: ''
  }
}

// selectors
// students total selector
const getStudentsTotal = createSelector(
  (state) => state.filterStudents,
  (filterStudents) => {
    console.log('compute the getStudentsTotal selector')
    return filterStudents.length
  }
)

// create the shared selectors
const selectors = {
  getStudentsTotal
}

const { Provider: StudentProvider, consume } = createStore(initialState, selectors, {isLoggerOn: true})

// we gonna export the store object.
export {
  StudentProvider as default,
  consume,
  updater
}
