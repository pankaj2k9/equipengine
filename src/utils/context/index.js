// TODO: Add test for the API's.
import React, { createContext } from 'react'
import { map, bind, __ } from 'ramda'
import { isNotEqual, getDisplayName } from './lib/utils'

const { Provider: RootProvider, Consumer } = createContext({})

/**
 * connect :: Component -> Component
 *
 * An HOC for connecting the component into provider.
 * @param {Function} WrappedComponent.
 * @return {Function} New component which wraps in Consumer.
 */
export const connect = (WrappedComponent) => {
  const Connected = (props) => {
    // Wrap the Display Name for Easy Debugging
    Connected.displayName = `Connect(${getDisplayName(WrappedComponent)})`
    // return the WrappedComponent which is wrapped to Consumer.
    return (
      <Consumer>
        {(value) => <WrappedComponent {...props} state={value.state} handlers={value.handlers} />}
      </Consumer>
    )
  }
  return Connected
}

/**
 * TODO: We need to expose an event which listens everytime our Provider Component is re-rendered.
 * provider :: Component -> Component
 *
 * Create a generic Provider component which encapsulates the important behavior of being a provider.
 * @param {Object} state This object represents the state which is managed by the passed Component.
 * @param {Function} handlers A function which accepts object of state and props, and dispatch function(dispatching function) . It returns an handlers object.
 * @param {Function} WrappedComponent
 * @return {Function} New component
 */
export const provider = (state, handlers) => (WrappedComponent) => {
  class Provider extends React.Component {
    constructor (props) {
      super(props)
      // initial value for our state.
      this.state = state
      // initial value of our provider value.
      this.value = {
        state: this.state, // The given state for the Root component
        handlers: this.createHandlers({
          state: this.state, // pass the initial state.
          props: this.props // pass the initial props.
        })
      }
      // this will hold the updated object information.
      this.updaterInfo = {}
    }

    // Dispatching an updater function. Updater function returns an object which tells about the updated information.
    dispatch = (updaterInfo) => {
      this.updaterInfo = updaterInfo
      // update the state based on the updaterInfo.newState
      this.setState(updaterInfo.newState)
    }

    // Iterate on the given object and execute the bindActionToThis to each handler.
    createHandlers = ({state, props}) => {
      // Helper function for binding each action to this Class Object.
      const bindActionToThis = bind(__, this)
      // return new object.
      return map(bindActionToThis, handlers({state, props}, this.dispatch))
    }

    // TODO: Add configuration to our Provider which gives our user an option if they need or don't ndeed this state logger.
    // TODO: Enhanced the logger text.
    loggerStates = (prevState, nextState) => {
      console.group(`%c updater ${this.updaterInfo.type}`, 'color: #1e1935;')
      console.log('Prev State', prevState)
      console.log('Updater', {
        type: this.updaterInfo.type,
        newState: this.updaterInfo.newState // the state which is affected when the updater function is executed.
      })
      console.log('Next State', nextState)
      console.groupEnd()
    }

    shouldComponentUpdate (nextProps, nextState) {
      this.loggerStates(this.state, nextState)
      // check if the this.state/this.props is not equal to nextState/nextProps.
      if (isNotEqual(this.state, nextState) || isNotEqual(this.prop, nextProps)) {
        // replace the existing value of instance this.value.
        this.value = {
          state: nextState,
          handlers: this.createHandlers({
            state: nextState, // pass the new state.
            props: nextProps // pass the new props.
          })
        }
        return true
      }
      // don't re-render the component.
      return false
    }

    render () {
      return (
        <RootProvider value={this.value}>
          <WrappedComponent {...this.props} />
        </RootProvider>
      )
    }
  }

  // Wrap the Display Name for Easy Debugging
  Provider.displayName = `Provider(${getDisplayName(WrappedComponent)})`

  return Provider
}
