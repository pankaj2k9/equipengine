import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
//
import IconUser from "react-icons/lib/fa/info-circle"

// compose button, group button
/* const GroupButton = Button.extend`
 *   width: 146px;
 * `; */

// List Item Group
const ListItemGroup = styled(({ className, group }) => {
  return (
    <li className={className}>
      <div>
        <p>{group.desc}</p>
        <p>
          <span>
            <IconUser />
          </span>
          <span>{`${group.infoIcon} infoIcon`}</span>
        </p>
      </div>
      <div>
        {/* check if the group type is your-group
            if your group type, we need to check if the group is already selected or not.
          */}
        {/** check if the group item is type public group.
            we also need to check if the item is already joined or not.
          */}
      </div>
    </li>
  )
})`
  padding: 0px 0em 1em 1em;
  margin-bottom: 1.2em;
  background-color: ${props => (props.isSelected ? "#F6F6F6" : "none")};

  > div:first-child {
    h5 {
      font-size: 1.01rem;
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
      font-size: 12px;
    }
    p:nth-child(2) {
      color: #0d90e0;
    }
  }

  > div:last-child button:first-child {
    margin-right: 0.7em;
  }

  @media screen and (min-width: 768px) {
    display: flex;

    > div:first-child {
      margin-right: 1em;
    }
  }
`

ListItemGroup.propTypes = {
  group: PropTypes.object.isRequired
}

export default ListItemGroup
