import createStore from 'utils/context'
import { values, filter, equals, compose, prop, append, merge } from 'ramda'
import update from 'immutability-helper'

// Updater is a pure function

/**
 * getStudentsUpdater :: (Object, Object) -> Object
 *
 * A factory function which shows what state is gonna be updated. It receives the prevState and props which are passed to Provider component. This updater function under the hood passed in this.setState of Component. Don't directly mutate the prevState in here.
 * @param {Object} prevState
 * @param {Object} props
 * @return {Object} stateChange
 */
const getStudents = (prevState, props) => {
  // Student data.
  const students = {
    '0012018': {
      id: '0012018',
      firstName: 'Irish Jane',
      lastName: 'Bulangis-Cual'
    },
    '0022018': {
      id: '0022018',
      firstName: 'Drish Jane',
      lastName: 'Cual'
    },
    '0032018': {
      id: '0032018',
      firstName: 'Dennis',
      lastName: 'Martin'
    }
  }

  return {
    students: values(students)
  }
}

// A function which accepts a target object and returns an updater.
const changeInput = (target) => {
  const value = target.type === 'checkbox' ? target.checked : target.value
  const name = target.name

  const handlerInputChange = (prevState, props) => ({
    fields: update(prevState.fields, { // using immutability-helper. We update the given property value using computed property syntax.
      [name]: {
        $set: value
      }
    })
  })
  // return the updater.
  return handlerInputChange
}

const resetForm = (prevState) => ({
  fields: {
    id: '',
    firstName: '',
    lastName: '',
    search: prevState.fields.search
  }
})

export const addUser = (prevState) => {
  const { fields: {id, firstName, lastName}, students } = prevState
  const student = {
    id,
    firstName,
    lastName
  }
  return {
    students: append(student, students) // add the student object at the end of students list array.
  }
}

// This construct a new stateChange based on the return stateChange of other updater function.
// Updater composition -> An updater function which the return stateChange is based on the other stateChange of 2 or more updaters.
// A function which compose an object - Object composition. - “Favor object composition over class inheritance” the Gang of Four, “Design Patterns: Elements of Reusable Object Oriented Software”
const addUserAndResetForm = (prevState) =>
  merge(addUser(prevState), resetForm(prevState))

const filterStudents = (prevState, props) => {
  const { fields: {search}, students } = prevState

  // check if the firstName value of student object is equal to search.
  const isFirstnameEqualTo = compose(equals(search), prop('firstName'))
  // filtering array based on the given predicate
  const filteredStudents = filter(isFirstnameEqualTo, students)

  return {
    students: filteredStudents
  }
}

// Updater functions
const updater = {
  getStudents,
  changeInput,
  resetForm,
  addUser,
  addUserAndResetForm,
  filterStudents
}

// Use the provider API. Create a provider component for student data.
const initialState = {
  students: [], // convert object to array.
  fields: {
    search: '',
    id: '',
    firstName: '',
    lastName: ''
  }
}

const { Provider: StudentProvider, consume } = createStore(initialState, {isLoggerOn: true})

// we gonna export the store object.
export {
  StudentProvider as default,
  consume,
  updater
}
