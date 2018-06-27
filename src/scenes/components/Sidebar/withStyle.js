import styled from 'styled-components'
import { identical } from 'ramda'

// Add Height based on the passed object.
const addHeight = ({ type, pathname }) => {
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

  // return 0
  return '100vh'
}

// Add Display left based on the passed object.
const addDisplay = ({ type, pathname }) => {
  const browseGroupPath1 = '/secure/browse-groups'
  // check first if the current location is equal to browseGroupPath.
  if (identical(pathname, browseGroupPath1)) {
    return 'none'
  }

  const homePath2 = '/secure/home'
  // check first if the current location is equal to homePath.
  if (identical(pathname, homePath2)) {
    return 'none'
  }

  const activityPath = '/secure/activity'
  // check first if the current location is equal to activityPath.
  if (identical(pathname, activityPath)) {
    return 'none'
  }

  const settingsPath = '/secure/settings'
  // check first if the current location is equal to settingsPath.
  if (identical(pathname, settingsPath)) {
    return 'none'
  }

  const yourAccountPath = '/secure/your-account'
  // check first if the current location is equal to yourAccountPath.
  if (identical(pathname, yourAccountPath)) {
    return 'none'
  }

  // return block
  return 'block'
}

export default (WrappedComponent) =>
  styled(WrappedComponent)`
    position: fixed;
    top: 0;
    height: 100vh;
    opacity: 0;
    z-index: 1;
    background: rgba(53, 53, 53, 0.53);
    width: 100%;
    margin-left: -100%;
    transition: margin-left 150ms ease-in, opacity 500ms;

    &.isOpen {
      opacity: 1;
      margin-left: 0px;
      z-index: 2;
    }

    .Sidebar__inner {
      height: 100%;
      width: 208px;
    }

    .Sidebar__body {
      background: #2f3036;
      height: 100%;
    }

    .Sidebar__body__mainPages {
      padding: 10% 7% 7% 7%;
    }

    .Sidebar__item {
      margin-bottom: 1.6em;
    }

    .Sidebar__item a {
      letter-spacing: 0.7px;
      color: #9fa6ad;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 12px;
    }

    .Sidebar__body__otherPages {
      padding: 15% 8% 8% 8%;
      border-top: 1px solid #424242;
      border-bottom: 1px solid #424242;
    }

    .Sidebar__body__otherPages--settings {
      border-bottom: 0;
      width: 100%;
      position: absolute;
      bottom: 0;
    }

    @media screen and (min-width: 768px) {
      width: 225px;
      margin-left: 0px;
      z-index: 1;
      opacity: 1;
      height: ${(props) => addHeight({ type: props.type, pathname: props.pathname })};

      .Sidebar__body {
        display: ${(props) => addDisplay({ type: props.type, pathname: props.pathname })};
      }

      .Sidebar__inner {
        width: 100%;
      }

      .Sidebar__body__mainPages {
        padding: 6px 20px 17px 20px;
      }
    }
  `
