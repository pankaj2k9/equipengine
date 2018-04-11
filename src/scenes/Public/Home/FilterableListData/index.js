import React, { Component } from 'react'
import { map } from 'ramda'
import StudentProvider, { connect } from './context'

// ---------------------------------PRESENTATIONAL COMPONENT-----------------------//

// Searchbar
const Searchbar = connect(({state: {search}, handlers: {filterStudents, handleInputChange}}) => (
  <form style={{marginBottom: '1em'}}>
    <label htmlFor='search' style={{marginRight: '1em'}}>Search</label>
    <input name='search' type='text' value={search} onKeyUp={filterStudents} onChange={handleInputChange} />
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

// Create form for adding student data.
const Form = ({state: {id, firstName, lastName}, handlers: {addUser, handleInputChange}}) => (
  <form onSubmit={addUser}>
    <div>
      <input name='id' type='text' value={id} placeholder='ID' onChange={handleInputChange} />
    </div>
    <div>
      <input name='firstName' type='text' value={firstName} placeholder='First Name' onChange={handleInputChange} />
    </div>
    <div>
      <input name='lastName' type='text' value={lastName} placeholder='Last Name' onChange={handleInputChange} />
    </div>
    <div>
      <button>Add User</button>
    </div>
  </form>
)

const FormStudent = connect(Form)

// ---------------------------------EXPORTED COMPONENT-----------------------//
class FilterableTableStudent extends Component {
  render () {
    return (
      <StudentProvider>
        <StudentTable />
        <FormStudent />
      </StudentProvider>
    )
  }
}

export default FilterableTableStudent
