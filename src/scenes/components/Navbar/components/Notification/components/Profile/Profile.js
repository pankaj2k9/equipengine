import React from 'react'
import PropTypes from 'prop-types'
//
import PopoverProfileContent from './components/PopoverProfileContent'
import Popover from 'base_components/Popover'
import UserAvatar from 'base_components/UserAvatar'
import IconDown from 'react-icons/lib/fa/angle-down'
import './styles.css'

const Profile = ({ name, avatar, removeLoggedUser }) => {
  return (
    <div className='Profile'>
      <p>{name}</p>
      <UserAvatar image={avatar} />
      <Popover
        buttonIcon={<IconDown />}
        buttonStyle={{
          fontSize: '16px',
          position: 'relative',
          top: '-3px',
          marginLeft: '3px'
        }}
        popoverContentElement={
          <PopoverProfileContent removeLoggedUser={removeLoggedUser} />
        }
      />
    </div>
  )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  removeLoggedUser: PropTypes.func.isRequired
}

export default Profile
