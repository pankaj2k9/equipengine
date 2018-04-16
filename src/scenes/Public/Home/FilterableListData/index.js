import React, { Fragment, Component } from 'react'
import { map, not, identical } from 'ramda'
import { debounce } from 'lodash'
import StudentProvider, { consume, updater } from './context'

// ---------------------------------PRESENTATIONAL COMPONENT-----------------------//

// Searchbar
class Searchbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
    // We create an instance of our Searchbar class. We assign the return function of debounce. Then we gonna pass this instance method as handler of event keyUp. We need to avoid the recreation of debounce function. Because of that, we create the debounce on the constructor method. Constructor method only invoke once when our component is initialized.
    // This is hacks for debouncing our searchChange handler to prevent the cleanup of the event object. Alternative, we can use the event.persist() - https://reactjs.org/docs/events.html#event-pooling
    this.debounceHandleSearch = debounce(() => {
      props.handlers.searchChange(this.state.search)
    }, 300)
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    }, () => {
      this.debounceHandleSearch()
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    // if not identical, render the component
    if (not(identical(this.state.search, nextState.search))) {
      return true
    }

    return false
  }

  render () {
    /* console.log('re-render searchbar') */
    return (
      <form style={{marginBottom: '1em'}}>
        <label htmlFor='search' style={{marginRight: '1em'}}>Search</label>
        <input name='search' type='text' value={this.state.search} onChange={this.handleSearch} />
      </form>
    )
  }
}

// Table
const Table = ({students, handlers: {refreshFilterStudents}}) => (
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
        map((student) => <TableRow student={student} key={student.id} />, students)
      }
    </tbody>
    <tfoot>
      <tr>
        <td><button onClick={refreshFilterStudents}>Refresh</button></td>
      </tr>
    </tfoot>
  </table>
)

// TableRow
const TableRow = ({student}) => (
  <tr>
    <td>{student.id}</td>
    <td>{student.firstName}</td>
    <td>{student.lastName}</td>
  </tr>
)

// Filterable table for student data.
class TableStudent extends React.Component {
  componentDidMount () {
    this.props.handlers.getStudents()
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (not(identical(nextProps.studentsTotal, this.props.studentsTotal))) {
      return true
    }
    return false
  }

  render () {
    const { studentsTotal, pending } = this.props
    /* console.log('re render our table student') */
    return (
      <div style={{width: '25%', margin: '5em auto'}}>
        {
          pending ? (
            <p>Fetching students...</p>
          ) : (
            <Fragment>
              <span>{studentsTotal}</span>
              <SearchbarStudent />
              <ConnectedTable />
            </Fragment>
          )
        }
      </div>
    )
  }
}

// Create form for adding student data.
class Form extends React.Component {
  render () {
    const { fields, handlers: {addUser, handleInputChange} } = this.props
    return (
      <form onSubmit={addUser}>
        <div>
          <input name='id' type='text' value={fields.id} placeholder='ID' onChange={handleInputChange} />
        </div>
        <div>
          <input name='firstName' type='text' value={fields.firstName} placeholder='First Name' onChange={handleInputChange} />
        </div>
        <div>
          <input name='lastName' type='text' value={fields.lastName} placeholder='Last Name' onChange={handleInputChange} />
        </div>
        <div>
          <button>Add User</button>
        </div>
      </form>
    )
  }
}

// ---------------------------------CONTAINER COMPONENT-----------------------//

// SearchbarStudent
const mapHandlersToProps = (produce) => ({
  searchChange (search) {
    produce(updater.searchStudents(search))
  }
})

// Consume hoc will return a Container Component
const SearchbarStudent = consume({}, mapHandlersToProps)(Searchbar)

// ConnectedTable
const mapStateTable = ({state}) => ({
  students: state.filterStudents
})

const mapHandlersTable = (produce) => ({
  refreshFilterStudents () {
    produce(updater.refreshFilterStudents)
  }
})

const ConnectedTable = consume(mapStateTable, mapHandlersTable)(Table)

// TableStudent
const mapStateTableStudent = ({state, selectors: {getStudentsTotal}}) => ({
  studentsTotal: getStudentsTotal(state),
  pending: state.processRequest.pending
})

const mapHandlersTableStudent = (produce) => ({
  getStudents () {
    updater.fetchStudents(produce)
  }
})

const ConnectedTableStudent = consume(mapStateTableStudent, mapHandlersTableStudent)(TableStudent)

// FormStudent
const mapStateForm = ({state}) => ({
  fields: state.fields
})

const mapHandlersForm = (produce) => ({
  addUser (e) {
    e.preventDefault()
    produce(updater.addUserAndResetForm)
  },
  handleInputChange (e) {
    produce(updater.changeInput(e.target))
  }
})

const FormStudent = consume(mapStateForm, mapHandlersForm)(Form)

// ---------------------------------EXPORTED COMPONENT-----------------------//
class FilterableTableStudent extends Component {
  render () {
    return (
      <StudentProvider>
        <ConnectedTableStudent />
        <FormStudent />
      </StudentProvider>
    )
  }
}

export default FilterableTableStudent
