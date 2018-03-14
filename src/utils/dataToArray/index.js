import { compose, reduce, keys, append, prop, assoc } from 'ramda'

// trasform the data as object into array.
export default (object) =>
  reduce(
    (arr, property) => {
      // create new object based on the given object. We will add id field on the existing shape of object.
      const getObject = compose(assoc('id', property), prop(property))
      // append the new object on the list
      return append(getObject(object), arr)
    },
    [],
    keys(object) // return an array of enumerable properties of object.
  )
