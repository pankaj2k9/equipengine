import React from 'react';
import styled from 'styled-components';

import flag from './flag.svg';

export default styled(({ className }) => (
  <img className={className} alt="flag-icon" src={flag} />
))`
  height: ${props => props.big && '1.3em'};
`;
