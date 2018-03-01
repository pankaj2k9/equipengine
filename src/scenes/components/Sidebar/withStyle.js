import styled from 'styled-components'

export default WrappedComponent =>
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
      font-weight: 800;
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
      width: 257px;
      margin-left: 0px;
      z-index: 1;
      opacity: 1;
      height: ${props => (props.isBrowseGroupPath ? '0px' : '100vh')};

      .Sidebar__body {
        display: ${props => (props.isBrowseGroupPath ? 'none' : 'block')};
      }

      .Sidebar__inner {
        width: 100%;
      }

      .Sidebar__body__mainPages {
        padding: 25px 35px 17px 35px;
      }
    }
  `
