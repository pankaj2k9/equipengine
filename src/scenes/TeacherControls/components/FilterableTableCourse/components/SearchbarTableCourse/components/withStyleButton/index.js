import styled from 'styled-components';

const withStyleButton = WrappedComponent =>
  // styling the dropdown component.
  styled(WrappedComponent)`
    background: #eeeeee;
    border: none;
    font-weight: 800;
    font-size: 12px;
    color: #969696;
    text-shadow: none;
    text-transform: uppercase;
    padding: 10px 20px;

    & + .dropdown-menu {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      width: 278px;
      padding: 14px 20px;

      & span {
        border-top: 5px dashed;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        float: right;
        margin-top: 0.5em;
      }
    }
  `;

export default withStyleButton;
