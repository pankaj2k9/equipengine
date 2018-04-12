import React, { Component } from 'react'
import { map } from 'ramda'
import StudentProvider, { connect } from './context'

// ---------------------------------PRESENTATIONAL COMPONENT-----------------------//

// Searchbar
const Searchbar = ({search, filterStudents, handleInputChange}) => (
  <form style={{marginBottom: '1em'}}>
    <label htmlFor='search' style={{marginRight: '1em'}}>Search</label>
    <input name='search' type='text' value={search} onKeyUp={filterStudents} onChange={handleInputChange} />
  </form>
)

const mapStateSearchbar = (state) => ({
  search: state.fields.search
})

const mapHandlerToProps = (handlers) => ({
  filterStudents: handlers.filterStudents,
  handleInputChange: handlers.handleInputChange
})

const SearchbarStudent = connect(mapStateSearchbar, mapHandlerToProps)(Searchbar)

// Table
const Table = ({students, getStudents}) => (
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

const mapStateTable = (state) => ({
  students: state.students
})

const mapHandlerTable = (handlers) => ({
  getStudents: handlers.getStudents
})

const ConnectedTable = connect(mapStateTable, mapHandlerTable)(Table)

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
    this.props.getStudents()
  }

  render () {
    return (
      <div style={{width: '25%', margin: '5em auto'}}>
        <SearchbarStudent />
        <ConnectedTable />
      </div>
    )
  }
}

const mapHandlerTableStudent = (handlers) => ({
  getStudents: handlers.getStudents
})

const ConnectedTableStudent = connect({}, mapHandlerTableStudent)(TableStudent)

// Create form for adding student data.
const Form = ({fields, addUser, handleInputChange}) => (
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

const mapStateForm = (state) => ({
  fields: state.fields
})

const mapHandlerForm = (handlers) => ({
  addUser: handlers.addUser,
  handleInputChange: handlers.handleInputChange
})

const FormStudent = connect(mapStateForm, mapHandlerForm)(Form)

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
