import React from 'react'
import PropTypes from 'prop-types'

import IconMessage from 'react-icons/lib/fa/envelope'
import Popover from 'base_components/Popover'

const PopoverMessage = ({ MessageRowData }) => {
  return (
    <Popover
      buttonIcon={<IconMessage />}
      buttonStyle={{
        marginLeft: 24
      }}
      popoverContentElement={<MessageRowData />}
      dataCount={12}
    />
  )
}

PopoverMessage.propTypes = {
  MessageRowData: PropTypes.func.isRequired
}

export default PopoverMessage
