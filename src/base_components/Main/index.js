import PropTypes from 'prop-types';
import styled from 'styled-components';

import MainLeft from './components/MainLeft';
import MainRight from './components/MainRight';
import MainInnerContainer from './components/MainInnerContainer';
import MainHeaderTitle from './components/MainHeaderTitle';

const Main = styled.main`
  @media screen and (min-width: 768px) {
    padding-left: 257px;
    position: absolute;
    top: 68px;
    width: 100%;
  }
`;

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export {
  Main as default,
  MainInnerContainer,
  MainLeft,
  MainRight,
  MainHeaderTitle
};
