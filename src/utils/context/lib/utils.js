import { compose, not, equals } from 'ramda'
// Predicate function for evaluating if the 2 values is not equal.
export const isNotEqual = compose(not, equals)

// Get the display name of a function/react which is passed.
export const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || 'Component'
