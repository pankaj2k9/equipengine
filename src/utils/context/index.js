// TODO: Add test for the API's.
// TODO: Add validation to our API's.
import React, { createContext } from 'react'
import { compose, identical, type, when, keys, reduce, prop } from 'ramda'
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
 * @param {Object} config Optional . Holds the config for creating store. For an instance, showing the logger to the browser's console.
 */
const createStore = (initialState = {}, option = initialOption) => {
  // creating context
  const { Provider: RootProvider, Consumer } = createContext(initialState)

  // It returns an instance of StoreEmitter Class object.
  const storeEmitter = createStoreEmitter()

  /**
   * subscribe :: Function -> Function
   *
   * A function which subscribes the given listener to the stateChanged event of storeEmitter object. The listener receives the current state of the application. This is the best place to check the current state of the store.
   * @param {Function} listener A callback function which listen to stateChanged event. The listener receives the current state of the store.
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
      this.state = {
        ...initialState, // Initial state for our store.
        produce: this.produce
      }
      // this will hold the state change information.
      this.stateChange = {}
      // updater function name
      this.updaterName = ''
    }

    // We gonna invoke all function here which has a sideEffects.
    componentDidMount () {
      // Emit the stateChanged event.
      storeEmitter.emit('stateChanged', this.state)
    }

    /**
     * produce :: Function -> void
     *
     * Produce an update to our states through invoking an updater function. Updater function returns an object which tells about the updated information.
     * @param {Function} updater
     * @return {Void}
     */
    produce = (updater) => {
      this.updaterName = updater.name
      // Update the current state of the apps. We pass updater function instead of object. Its better to pass an updater function rather than object because passing of object has caveats.
      this.setState(
        (prevState, props) => {
          // Execute the updater function. Pass the prevState and props. It returns a stateChange object. We will assign the stateChange to this.stateChange instance and use the stateChange as return value of the function.
          this.stateChange = updater(prevState, props)
          return this.stateChange
        }
      )
    }

    // loggerStates get executed when the state is updated due to firing an updater fn.
    loggerStates = (prevState, nextState) => {
      // Get all the keys of the stateChange.
      const newStateKeys = keys(this.stateChange)
      // prev state, we need to extract the fields which are affected in updates through the keys.
      const getAffectedState = reduce(
        (obj, value) =>
          prevState.hasOwnProperty(value)
            ? {...obj, [value]: prop(value, prevState)}
            : obj
        , {}, newStateKeys)
      console.group(`updater %c${this.updaterName}`, 'color: #348f29;')
      console.log('Affected state', getAffectedState)
      console.log('State change', this.stateChange)
      console.log('Prev whole state', prevState)
      console.log('Next whole state', nextState)
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
        // re-render the component.
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
        <RootProvider value={this.state}>
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
  * @param {Function|Object|null} mapStateToProps When function is passed, it returns an object which tells the Consumer what state should be map to our WrappedComponet. When empty object or null is passed, no mapping of state to props. It receives the current state of the app and ownProps
  * @param {Function|Object|null} mapProducersToProps When function is passed, it returns an object which tells the Consumer what producers should be map to our WrappedComponet. When empty object or null is passed, no mapping of handlers to props. This function receives the produce instance method of Provider. We gonna pass the updater to produce.
  * @param {Function} WrappedComponent.
  * @return {Function} New component which wraps in Consumer.
  */
  const connect = (mapStateToProps, mapProducersToProps) => (WrappedComponent) => {
    const Connected = (props) => {
      // Wrap the Display Name for Easy Debugging
      Connected.displayName = `Connected(${getDisplayName(WrappedComponent)})`
      // return the WrappedComponent which is wrapped to Consumer.
      return (
        <Consumer>
          {
            (state) => {
              // TODO: Received the createHandlers instance method of Provider here and pass the mapProducersToProps function. Return value will be the handlers which are mapped to our component and each handler is bind to our Provider component.
              // check if the data is a function
              const isFunction = compose(identical('Function'), type)
              // Get the state which are mapped to props.
              const passState = when(
                isFunction, // predicateFn.
                (mapStateFn) => mapStateFn(state, props) // mapStateToProps returns a state object which is need by the component
              )(mapStateToProps)
              // Get the handlers which are mapped to props.
              const passProducers = when(
                isFunction, // predicateFn.
                (mapProducersFn) => mapProducersFn(state.produce) // mapStateToProps returns a state object which is need by the component
              )(mapProducersToProps)
              return (
                <WrappedComponent {...props} {...passState} {...passProducers} />
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
