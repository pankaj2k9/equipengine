import EventEmitter from 'events'

// We use this emitter for subscribing creating events.
const createStoreEmitter = () => {
  class StoreEmitter extends EventEmitter {}
  // return the instance of StoreEmitter Class.
  return new StoreEmitter()
}

export default createStoreEmitter
