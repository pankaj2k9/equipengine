import React from "react"
import PropTypes from "prop-types"
//
import PopoverProfileContent from "./components/PopoverProfileContent"
import Popover from "base_components/Popover"
import UserAvatar from "base_components/UserAvatar"
import IconDown from "react-icons/lib/fa/angle-down"
import "./styles.css"

const Profile = ({ user, logout }) => {
  const { avatar, first_name, last_name } = user
  return (
    <div className="Profile">
      <p>
        {first_name} {last_name}
      </p>
      <Popover
        buttonIcon={
          <span>
            <UserAvatar image={avatar && avatar.url} />
            <IconDown />
          </span>
        }
        buttonStyle={{
          fontSize: "16px",
          position: "relative",
          top: "-3px",
          marginLeft: "3px"
        }}
        popoverContentElement={<PopoverProfileContent onLogout={logout} />}
      />
    </div>
  )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

export default Profile
