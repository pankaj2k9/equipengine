import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainInnerContainer = styled.div`
  padding: 2%;
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 27px 40px;
  }
`;

MainInnerContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default MainInnerContainer;
