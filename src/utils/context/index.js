// TODO: Add test for the API's.
// TODO: Add validation to our API's.
import React, { createContext } from 'react'
import { map, bind, __, compose, identical, type, when } from 'ramda'
import { isNotEqual, getDisplayName } from './lib/utils'
import createStoreEmitter from './lib/createStoreEmitter'

// This object holds the initial value for our option parameter. The option isLoggerOn is defaulted to true
const initialOption = {
  isLoggerOn: true
}

/**
 * createStore :: (Object, Object, Object) -> Object
 *
 * This wil create store for the specific feature of our application. Our store holds the state and the handlers.
 * @param {Object} initialState
 * @param {Object} handlers Handlers object.
 * @param {Object} config Optional . Holds the config for creating store. For an instance, showing the logger to the browser's console.
 */
const createStore = (initialState = {}, handlers, option = initialOption) => {
  // creating context
  const { Provider: RootProvider, Consumer } = createContext(initialState)

  // It returns an instance of StoreEmitter Class object.
  const storeEmitter = createStoreEmitter()

  /**
   * subscribe :: Function -> Function
   *
   * A function which subscribes the given listener to the stateChanged event of storeEmitter object. The listener receives the current state of the application. This is the best place to check the current state of the store.
   * @param {Function} listener A callback function which listen to stateChanged event.
   * @return {Function} Unsubscribe function.
   */
  const subscribe = (listener) => {
    // attach an event.
    // stateChanged is invoked when the state is initially created, some updater has been invoked, and our state is updated.
    storeEmitter.on('stateChanged', listener)

    // return a function which unsubscribe our listener to the event
    return () => storeEmitter.removeListener('stateChanged', listener)
  }

  /**
  * TODO: We gonna remove the passing of handlers when creating store, instead we gonna pass the handlers when our component is subscribing to our store.
  * Create a generic Provider component which encapsulates the important behavior of being a provider.
  * @param {Object} state This object represents the state which is managed by the passed Component.
  * @param {Function} handlers A function which accepts object of state and props, and dispatch function(dispatching function) . It returns an handlers object.
  * @param {Function} WrappedComponent
  * @return {Function} New component
  */
  class Provider extends React.Component {
    constructor (props) {
      super(props)
      // initial store for our state.
      this.state = initialState
      // Initial store. Store holds the states and handlers which update states.
      // We gonna pass our store to the children components using Provider component.
      this.store = {
        state: this.state, // The given state for the Root component
        handlers: this.createHandlers()
      }
      // this will hold the updated object information.
      this.updaterInfo = {}
    }

    // We gonna invoke all function here which has a sideEffects.
    componentDidMount () {
      // Emit the stateChanged event.
      storeEmitter.emit('stateChanged', this.state)
    }

    // Produce an update to our states through invoking an updater function. Updater function returns an object which tells about the updated information.
    produce = (updater) => {
      // pass the current state of the app then the return value is assign to the instance property.
      this.updaterInfo = updater(this.state)
      // update the state based on the updaterInfo.newState
      this.setState(this.updaterInfo.newState)
    }

    // Iterate on the given object and execute the bindActionToThis to each handler.
    // TODO: We gonna pass this createHandlers as part of the this.value of Provider. We will execute this to connect method.
    // TODO: We dont need to bind each handler to our Provider object.
    createHandlers = () => {
      // Helper function for binding each action to this Class Object.
      const bindActionToThis = bind(__, this)
      // return new object.
      return map(bindActionToThis, handlers(this.produce))
    }

    // TODO: Add configuration to our Provider which gives our user an option if they need or don't ndeed this state logger.
    // TODO: Enhanced the logger text.
    loggerStates = (prevState, nextState) => {
      console.group(`updater %c${this.updaterInfo.type}`, 'color: #348f29;')
      console.log('Prev State', prevState)
      console.log('Updater', {
        type: this.updaterInfo.type,
        newState: this.updaterInfo.newState // the state which is affected when the updater function is executed.
      })
      console.log('Next State', nextState)
      console.groupEnd()
    }

    shouldComponentUpdate (nextProps, nextState) {
      // if config isLoggerOn is true, we will display logger to the console.
      if (option.isLoggerOn) {
        this.loggerStates(this.state, nextState)
      }

      // Emit the stateChanged event. Pass the nextState as 2 argument to our emit. This argument is passed as an input to all listeners of stateChanged event.
      storeEmitter.emit('stateChanged', nextState)

      // check if the this.state/this.props is not equal to nextState/nextProps.
      if (isNotEqual(this.state, nextState) || isNotEqual(this.prop, nextProps)) {
        // replace the existing store of instance this.store.
        this.store = {
          state: nextState,
          handlers: this.createHandlers()
        }

        return true
      }
      // don't re-render the component.
      return false
    }

    componenWillUnmount () {
      // Removing the listeners to the stateChanged event which is attached to our storeEmitter.
      storeEmitter.removeAllListeners(['stateChanged'])
    }

    render () {
      return (
        <RootProvider value={this.store}>
          {this.props.children}
        </RootProvider>
      )
    }
  }

  /**
  * TODO: We need to give an option to our component about what states and handlers the component needs to the Provider. In this way, we can avoid passing unnecessary props to the components and this will control the re-rendering issues of the Connected component.
  * connect :: Component -> Component
  *
  * An HOC for connecting the component into provider.
  * @param {Function|Object|null} mapStateToProps When function is passed, it returns an object which tells the Consumer what state should be map to our WrappedComponet. When empty object or null is passed, no mapping of state to props.
  * @param {Function|Object|null} mapHandlerToProps When function is passed, it returns an object which tells the Consumer what handlers should be map to our WrappedComponet. When empty object or null is passed, no mapping of handlers to props.
  * @param {Function} WrappedComponent.
  * @return {Function} New component which wraps in Consumer.
  */
  const connect = (mapStateToProps, mapHandlerToProps) => (WrappedComponent) => {
    const Connected = (props) => {
      // Wrap the Display Name for Easy Debugging
      Connected.displayName = `Connected(${getDisplayName(WrappedComponent)})`
      // return the WrappedComponent which is wrapped to Consumer.
      return (
        <Consumer>
          {
            (store) => {
              // TODO: Received the createHandlers instance method of Provider here and pass the mapHandlerToProps function. Return value will be the handlers which are mapped to our component and each handler is bind to our Provider component.
              // check if the data is a function
              const isFunction = compose(identical('Function'), type)
              // Tests the final argument by passing it to the given predicate function. If the final argument is a function, we gonna execute the 2nd argument function which receives the final argument.
              // Get the state which are mapped to props.
              const state = when(
                isFunction, // predicateFn.
                (mapStateFn) => mapStateFn(store.state) // mapStateToProps returns a state object which is need by the component
              )(mapStateToProps)
              // Get the handlers which are mapped to props.
              const handlers = when(
                isFunction, // predicateFn.
                (mapHandlerFn) => mapHandlerFn(store.handlers) // mapStateToProps returns a state object which is need by the component
              )(mapHandlerToProps)
              return (
                <WrappedComponent {...props} {...state} {...handlers} />
              )
            }
          }
        </Consumer>
      )
    }
    return Connected
  }

  return {
    Provider,
    connect,
    subscribe
  }
}

export default createStore
