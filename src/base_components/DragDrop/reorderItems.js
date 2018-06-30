import { List } from "immutable"

// a little function to help us with reordering the result
export default (list, startIndex, endIndex) =>
  List(list)
    .delete(startIndex) // delete element to the position of given startIndex then return the new array which excludes the deleted element.
    .insert(endIndex, List(list).get(startIndex)) // insert the element from startIndex to the position of endIndex.
    .toArray() // return an array instead of List
