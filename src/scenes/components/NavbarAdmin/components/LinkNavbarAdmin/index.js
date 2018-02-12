import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LinkMain = styled(NavLink)`
  color: #ffffff;
  text-transform: uppercase;
  display: block;
  transition: all 300ms ease-in;

  &:hover {
    color: #0e90e0;
  }

  &.active {
    background: rgba(70, 70, 70, 0.82);
    color: #0e90e0;
  }

  @media screen and (min-width: 768px) {
    font-size: 0.78rem;

    &.active {
      background: none;
    }
  }
`;

const LinkHorizontal = styled(LinkMain)`
  padding: 2% 3%;
`;

export { LinkMain as default, LinkHorizontal };
