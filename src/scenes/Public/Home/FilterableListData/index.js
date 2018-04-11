/**
 *        Filterable Table Student
 *        Features:
 *          - Has a searchbar for searching data.
 *          - Table to display the data.
 *          - The order of the data can be re-ordered using table headers.
 */
import React, { Component } from 'react'
import { values, map, filter, equals, compose, prop } from 'ramda'
import createStore from 'utils/context'

// Updater is a pure function

/**
 * getStudentsUpdater :: Null -> Object
 *
 * A factory function which shows what state is gonna be updated.
 * @return {Object} UpdateInfo
 */
const getStudentsUpdater = () => {
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

const searchChangeUpdater = (key) => ({
  type: 'searchChange',
  newState: {
    searchKey: key
  }
})

const filterStudentsUpdater = (key, students) => {
  // check if the firstName value of student object is equal to searchKey.
  const isFirstnameEqualTo = compose(equals(key), prop('firstName'))
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
const state = {
  students: [], // convert object to array.
  searchKey: ''
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
const handlers = ({state, props}, produce) => ({
  searchChange ({target}) {
    produce(searchChangeUpdater(target.value))
  },
  getStudents () {
    produce(getStudentsUpdater())
  },
  filterStudents ({target}) {
    const { searchKey, students } = state
    produce(filterStudentsUpdater(searchKey, students))
  }
})

const { Provider, connect, subscribe } = createStore(state, handlers)

// subscribe function returns a function to unsubscribe the listener to an event.
subscribe(function (state) {
  console.log('the state is ', state)
})

// ---------------------------------PRESENTATIONAL COMPONENT-----------------------//

// Filterable table for student data.
class TableStudent extends React.Component {
  componentDidMount () {
    this.props.handlers.getStudents()
  }

  render () {
    return (
      <div style={{width: '25%', margin: '5em auto'}}>
        <Searchbar />
        <Table />
      </div>
    )
  }
}

const StudentTable = connect(TableStudent)

// Searchbar
const Searchbar = connect(({state, handlers}) => (
  <form style={{marginBottom: '1em'}}>
    <label htmlFor='search' style={{marginRight: '1em'}}>Search</label>
    <input name='search' type='text' value={state.searchKey} onKeyUp={handlers.filterStudents} onChange={handlers.searchChange} />
  </form>
))

// Table
const Table = connect(({state, handlers}) => (
  <table style={{marginBottom: '1em', width: '100%'}}>
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
    </thead>
    <tbody>
      {
        map((student) => <TableRow student={student} key={student.id} />, state.students)
      }
    </tbody>
    <tfoot>
      <tr>
        <td><button onClick={handlers.getStudents}>Refresh</button></td>
      </tr>
    </tfoot>
  </table>
))

// TableRow
const TableRow = ({student}) => (
  <tr>
    <td>{student.id}</td>
    <td>{student.firstName}</td>
    <td>{student.lastName}</td>
  </tr>
)

// ---------------------------------CONTAINER COMPONENT-----------------------//

// ---------------------------------EXPORTED COMPONENT-----------------------//
class FilterableTableStudent extends Component {
  render () {
    return (
      <Provider>
        <StudentTable />
      </Provider>
    )
  }
}

export default FilterableTableStudent
