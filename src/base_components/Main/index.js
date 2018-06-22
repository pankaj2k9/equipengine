import PropTypes from 'prop-types'
import styled from 'styled-components'
import { identical } from 'ramda'

import MainLeft from './components/MainLeft'
import MainRight from './components/MainRight'
import MainInnerContainer from './components/MainInnerContainer'
import MainHeaderTitle from './components/MainHeaderTitle'

// Add padding left based on the passed object.
const addPaddingLeft = ({ type, pathname }) => {
  const browseGroupPath = '/secure/browse-groups'
  // check first if the current location is equal to browseGroupPath.
  if (identical(pathname, browseGroupPath)) {
    return '0px'
  }

  const homePath = '/secure/home'
  // check first if the current location is equal to homePath.
  if (identical(pathname, homePath)) {
    return '0px'
  }

  const activityPath = '/secure/activity'
  // check first if the current location is equal to activityPath.
  if (identical(pathname, activityPath)) {
    return '0px'
  }

  const settingsPath = '/secure/settings'
  // check first if the current location is equal to settingsPath.
  if (identical(pathname, settingsPath)) {
    return '0px'
  }

  const yourAccountPath = '/secure/your-account'
  // check first if the current location is equal to yourAccountPath.
  if (identical(pathname, yourAccountPath)) {
    return '0px'
  }

  // else, check the account type.
  if (!identical(type, 'Admin')) {
    return '225px'
  }
  // return 0
  return '0px'
}

const Main = styled.main`
  padding-bottom: 2em;
  margin-top: ${(props) => identical(props.type, 'Admin') && '55px'};

  @media screen and (min-width: 768px) {
    padding-left: ${(props) =>
    addPaddingLeft({ type: props.type, pathname: props.pathname })};
    padding-bottom: 0;
    position: absolute;
    top: 59px;
    width: 100%;
    margin-top: 0;
  }
`

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  type: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired
}

export {
  Main as default,
  MainInnerContainer,
  MainLeft,
  MainRight,
  MainHeaderTitle
}
