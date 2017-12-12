import PropTypes from 'prop-types';
import styled from 'styled-components';
import { identical } from 'ramda';

import MainLeft from './components/MainLeft';
import MainRight from './components/MainRight';
import MainInnerContainer from './components/MainInnerContainer';
import MainHeaderTitle from './components/MainHeaderTitle';

const Main = styled.main`
  @media screen and (min-width: 768px) {
    padding-left: ${props => !identical(props.type, 'Admin') && '257px'};
    position: ${props => !identical(props.type, 'Admin') && 'absolute'};
    top: ${props => !identical(props.type, 'Admin') && '68px'};
    width: 100%;
  }
`;

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  type: PropTypes.string
};

export {
  Main as default,
  MainInnerContainer,
  MainLeft,
  MainRight,
  MainHeaderTitle
};
