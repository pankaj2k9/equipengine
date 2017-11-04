import React from 'react';

import RootForm, { Text } from 'base_components/RootForm';

const SearchbarForm = () => (
  <RootForm>
    <Text name="person" placeholder="Show by person..." />
  </RootForm>
);

export default SearchbarForm;
