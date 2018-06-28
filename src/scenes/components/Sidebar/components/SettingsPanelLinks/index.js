import React from 'react'
//
import Menu from '../Menu'
import Link from '../Link'

// this is for public other link
const SettingsPanelLinks = () => (
  <div className='Sidebar__body__otherPages Sidebar__body__otherPages--settings'>
    <Menu>
      <Link text='Groups' url='/groups' />
      <Link text='Settings' url='/settings' />
    </Menu>
  </div>
)

export default SettingsPanelLinks
