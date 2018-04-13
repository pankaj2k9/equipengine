import React, { Component } from 'react'
import { map } from 'ramda'
import StudentProvider, { consume, updater } from './context'

// ---------------------------------PRESENTATIONAL COMPONENT-----------------------//

// Searchbar
const Searchbar = ({search, handlers: {filterStudents, handleInputChange}}) => (
  <form style={{marginBottom: '1em'}}>
    <label htmlFor='search' style={{marginRight: '1em'}}>Search</label>
    <input name='search' type='text' value={search} onKeyUp={filterStudents} onChange={handleInputChange} />
  </form>
)

// Table
const Table = ({students, handlers: {getStudents}}) => (
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
        <td><button onClick={getStudents}>Refresh</button></td>
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

  render () {
    return (
      <div style={{width: '25%', margin: '5em auto'}}>
        <span>{this.props.studentsTotal}</span>
        <SearchbarStudent />
        <ConnectedTable />
      </div>
    )
  }
}

// Create form for adding student data.
class Form extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    // FIXME: Unnecessary re-rendering.
    // About unnecessary re-rendering, we need to tell our users about the rendering behavior of our utility.
    console.log(this.props.handlers)
    console.log('is equal', nextProps.handlers === this.props.handlers)
    return true
  }

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
const mapStateSearchbar = (state) => ({
  search: state.fields.search
})

const mapHandlersToProps = (produce) => ({
  handleInputChange (e) {
    produce(updater.changeInput(e.target))
  },
  filterStudents () {
    produce(updater.filterStudents)
  }
})

// Consume hoc will return a Container Component
const SearchbarStudent = consume(mapStateSearchbar, mapHandlersToProps)(Searchbar)

// ConnectedTable
const mapStateTable = (state) => ({
  students: state.students
})

const mapHandlersTable = (produce) => ({
  getStudents () {
    produce(updater.getStudents)
  }
})

const ConnectedTable = consume(mapStateTable, mapHandlersTable)(Table)

// ConnectedTableStudent
const mapStateTableStudent = (state) => ({
  studentsTotal: state.students.length
})

const mapHandlersTableStudent = (produce) => ({
  getStudents () {
    produce(updater.getStudents)
  }
})

const ConnectedTableStudent = consume(mapStateTableStudent, mapHandlersTableStudent)(TableStudent)

// FormStudent
const mapStateForm = (state) => ({
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
