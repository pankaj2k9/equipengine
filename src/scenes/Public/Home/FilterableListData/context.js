import createStore from 'utils/context'
import { values, filter, equals, compose, prop, append } from 'ramda'

// Updater is a pure function

/**
 * getStudentsUpdater :: Null -> Object
 *
 * A factory function which shows what state is gonna be updated.
 * @return {Object} UpdateInfo
 */
const getStudentsUpdater = () => (state) => {
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
    type: 'getStudents',
    newState: {
      students: values(students)
    }
  }
}

const addUserUpdater = () => (state) => {
  const { fields: {id, firstName, lastName}, students } = state
  const student = {
    id,
    firstName,
    lastName
  }
  return {
    type: 'addUser',
    newState: {
      students: append(student, students) // add the student object at the end of students list array.
    }
  }
}

const inputChangeUpdater = (target) => (state) => {
  const value = target.type === 'checkbox' ? target.checked : target.value
  const name = target.name
  return (
    {
      type: 'inputChange',
      newState: {
        fields: {
          ...state.fields,
          [name]: value // es6 computed property name.
        }
      }
    }
  )
}

const filterStudentsUpdater = () => (state) => {
  const { fields: {search}, students } = state

  // check if the firstName value of student object is equal to search.
  const isFirstnameEqualTo = compose(equals(search), prop('firstName'))
  // filtering array based on the given predicate
  const filteredStudents = filter(isFirstnameEqualTo, students)

  return {
    type: 'filterStudents',
    newState: {
      students: filteredStudents
    }
  }
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

/**
 * handlers :: Object -> Object(handlers function)
 *
 * Actions is an object where the fields are all action. Action can be used for updating the state, firing a request, and etc.
 * @param {Object} containerProperties
 * @param {Function} produce Produce an updates through invoking an updater function.
 * @return {Object} handlers object
 * @function - Factory Function (impure function)
 */
const handlers = (produce) => ({
  handleInputChange (e) {
    produce(inputChangeUpdater(e.target))
  },
  getStudents () {
    // Produce an updates to our store.
    produce(getStudentsUpdater())
  },
  addUser (e) {
    // prevent default
    e.preventDefault()
    produce(addUserUpdater())
  },
  filterStudents () {
    produce(filterStudentsUpdater())
  }
})

const { Provider: StudentProvider, connect } = createStore(initialState, handlers, {isLoggerOn: true})

// we gonna export the store object.
export {
  StudentProvider as default,
  connect
}
