import React from "react"
import PropTypes from "prop-types"

import IconBell from "react-icons/lib/fa/bell"
import Popover from "base_components/Popover"

const PopoverNoti = ({ NotiRowData }) => (
  <Popover buttonIcon={<IconBell />} popoverContentElement={<NotiRowData />} />
)

PopoverNoti.propTypes = {
  NotiRowData: PropTypes.func.isRequired
}

export default PopoverNoti
