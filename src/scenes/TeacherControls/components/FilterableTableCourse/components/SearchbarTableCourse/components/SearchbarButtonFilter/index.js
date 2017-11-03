import React from 'react';

import withStyleButton from '../withStyleButton';

export default withStyleButton(({ className, title }) => (
  <button className={className}>{title}</button>
));
