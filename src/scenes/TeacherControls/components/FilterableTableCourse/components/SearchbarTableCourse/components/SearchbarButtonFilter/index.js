import React from 'react';

import withStyleButton from '../withStyleButton';

export default withStyleButton(({ className, title }) => (
  <button className={className}>{title}</button>
)).extend`
    margin-bottom: 0.5em;
    margin-right: 0.5em;
    border-radius: 4px;
    width: 100%;

    @media screen and (min-width: 768px){
      width: 12%;
      margin-right: 16px;
    }
`;
