import React from 'react';
import PropTypes from 'prop-types';

// import all subcomponents
import ListRow from './components/ListRow';
import ListRowLeft from './components/ListRowLeft';
import ListRowRight from './components/ListRowRight';

// TODO: add styles on this component and its sub components
// start creating the scenes
const List = ({ children }) => {
  return <ul>{children}</ul>;
};

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

// exposed this Components.
// setting as the default component to be imported.
export { List as default, LIstRow, ListRowLeft, ListRowRight };
