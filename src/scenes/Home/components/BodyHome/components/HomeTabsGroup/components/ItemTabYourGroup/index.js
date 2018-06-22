import React from 'react'
import PropTypes from 'prop-types'

import ListYourGroup from './components/ListYourGroup'

const ItemTabYourGroup = ({ yourGroups }) => {

  // else
  return <ListYourGroup yourGroups={yourGroups} />
}

ItemTabYourGroup.propTypes = {
  yourGroups: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ItemTabYourGroup
