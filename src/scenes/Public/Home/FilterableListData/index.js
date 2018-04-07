/**
 * TODO:  Filterable Table Student
 *        Features:
 *          - Has a searchbar for searching data.
 *          - Table to display the data.
 *          - The order of the data can be re-ordered using table headers.
 */
import React, { Fragment, Component, createContext } from 'react'
import { values, map, filter, equals, isEmpty, not, compose, prop } from 'ramda'

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

// ---------------------------------HELPER FUNCTION-----------------------//
// Predicate function for evaluating if the 2 values is not equal.
const isNotEqual = compose(not, equals)
/* const isNotEmpty = compose(not, isEmpty) */

// Get the display name of a function/react which is passed.
const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || 'Component'

// An HOC for connecting the component into provider.
const connect = (WrappedComponent) => {
  const Connect = (props) => {
    // Wrap the Display Name for Easy Debugging
    Connect.displayName = `Connect(${getDisplayName(WrappedComponent)})`
    // return the WrappedComponent which is wrapped to Consumer.
    return (
      <Consumer>
        {(store) => <WrappedComponent {...props} state={store.state} actions={store.actions} />}
      </Consumer>
    )
  }
  return Connect
}

// ---------------------------------EXPORTED COMPONENT-----------------------//
class FilterableTableStudent extends Component {
  handleClick = () => {
    this.forceUpdate()
  }

  // Create a function which returns element then pass this function as reference to our provider. Instead passing this TableStudent element as children of ProviderStudentData. If children, our provider always will re-render even though the children props is the same.
  renderTable = () => <TableStudent />

  render () {
    return (
      <Fragment>
        <ProviderStudentData renderTable={this.renderTable} />
        <button onClick={this.handleClick}>Re-render</button>
      </Fragment>
    )
  }
}

export default FilterableTableStudent

// ---------------------------------CONTAINER COMPONENT-----------------------//
const { Provider, Consumer } = createContext({})

// ProviderStudentData encapsulates the state and behavior
// TODO: Reuse the behavior and state of our Provider component.
class ProviderStudentData extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      students: values(students), // convert object to array.
      searchKey: ''
    }
    // initial value of our this.value
    this.value = {
      state: this.state,
      actions: {
        handleSearchChange: this.handleSearchChange,
        handleKeyUp: this.handleKeyUp
      }
    }
  }

  handleSearchChange = ({target}) => {
    // update the searchKey
    this.setState({
      searchKey: target.value
    })
  }

  // TODO: Add throttles behavior in this handler.
  // TODO: Make a searchbar feature which is not case sensitive and add RegEx.
  handleKeyUp = () => {
    const initialStudents = values(students)
    const { searchKey } = this.state
    // check if the firstName value of student object is equal to searchKey.
    const isFirstnameEqualTo = compose(equals(searchKey), prop('firstName'))
    // filtering array based on the given predicate
    const filteredStudent = filter(isFirstnameEqualTo, initialStudents)
    // update students state
    this.setState({
      students: filteredStudent
    })

    // check if the searchKey is empty. If empty, retain the initial students.
    if (isEmpty(searchKey)) {
      this.setState({
        students: initialStudents
      })
    }
  }

  render () {
    // name the state of this.value as prevState
    const { state: prevState } = this.value
    // if this.state is not equal to prevState
    if (isNotEqual(this.state, prevState)) {
      // replace the existing state value to nextState
      this.value.state = this.state
    }

    return (
      <Provider value={this.value}>
        {this.props.renderTable()}
      </Provider>
    )
  }
}

// ---------------------------------PRESENTATIONAL COMPONENT-----------------------//

// Filterable table for student data.
const TableStudent = () => (
  <div style={{width: '25%', margin: '5em auto'}}>
    <Searchbar />
    <Table />
  </div>
)

// Searchbar
const Searchbar = connect(({state, actions}) => (
  <form style={{marginBottom: '1em'}}>
    <label htmlFor='search' style={{marginRight: '1em'}}>Search</label>
    <input name='search' type='text' value={state.searchKey} onKeyUp={actions.handleKeyUp} onChange={actions.handleSearchChange} />
  </form>
))

// Table
const Table = connect(({state}) => (
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
