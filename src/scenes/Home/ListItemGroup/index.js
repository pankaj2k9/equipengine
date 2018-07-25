import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
//
import IconUser from "react-icons/lib/fa/user"
import LinkButton from "base_components/LinkButton"
import { ACTIVE_GROUP_STATUS } from "services/constants"

// List Item Group
const ListItemGroup = styled(({ className, group }) => {
  return (
    <div className={className}>
      <div>
        <div>{group.title}</div>
        <p>
          <span>
            <IconUser />
          </span>
          <span>{`${group.user_ids && group.user_ids.length} people`}</span>
        </p>
        <p>{group.description}</p>
      </div>
      <div>
        <LinkButton
          disabled={group.status !== ACTIVE_GROUP_STATUS}
          url={`/secure/${group.id}/dashboard`}
          text={group.status !== ACTIVE_GROUP_STATUS ? "View (paused)" : "View"}
        />
      </div>
    </div>
  )
})`
  border-bottom: 1px solid #e2e2e2;
  padding: 1em 0em 1em 1em;
  margin-top: 1.2em;
  background-color: ${props => (props.isSelected ? "#F6F6F6" : "none")};

  > div:first-child {
    div {
      font-size: 14px;
      color: #111111;
      margin: 0 0 0.7em 0;
    }
    span:first-child {
      margin-right: 0.5em;
      position: relative;
      top: -3px;
    }
    p {
      color: #9fa6ad;
      margin-bottom: 1em;
      text-align: inherit;
    }
  }

  > div:last-child button:first-child {
    margin-right: 0.7em;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    > div:first-child {
      margin-right: 1em;
    }
  }
`

ListItemGroup.propTypes = {
  group: PropTypes.object.isRequired
}

export default ListItemGroup
