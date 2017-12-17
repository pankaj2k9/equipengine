import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  color: #000000;
  font-weight: 400;
`;

Label.propTypes = {
  htmlFor: PropTypes.string
};

export default Label;
