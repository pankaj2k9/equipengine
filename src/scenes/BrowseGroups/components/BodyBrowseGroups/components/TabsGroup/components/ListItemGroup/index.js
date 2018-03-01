import React from 'react'
import PropTypes from 'prop-types'
import { identical } from 'ramda'
import styled from 'styled-components'
//
import IconUser from 'react-icons/lib/fa/user'
import LinkButton from 'base_components/LinkButton'

// compose button, group button
/* const GroupButton = Button.extend`
 *   width: 146px;
 * `; */

// compose a joined container div that we will use on the joined button.
const JoinedContainer = styled.div`
  button:last-child {
    border: 1px solid #979797;
    background: none;
    color: #9c9c9c;
    margin-top: 1em;

    &:hover {
      background-color: #dddddd;
    }
  }

  @media screen and (min-width: 768px) {
    text-align: right;
  }
`

// List Item Group
const ListItemGroup = styled(({ className, group }) => {
  return (
    <li className={className}>
      <div>
        <h5>{group.title}</h5>
        <p>
          <span>
            <IconUser />
          </span>
          <span>{`${group.people} people`}</span>
        </p>
        <p>{group.desc}</p>
      </div>
      <div>
        {/* check if the group type is your-group
            if your group type, we need to check if the group is already selected or not.
          */}
        {/** check if the group item is type public group.
            we also need to check if the item is already joined or not.
          */}
        {identical(group.type, 'your-group') ? (
          group.isSelected ? (
            <LinkButton url='/secure/dashboard' text='View' />
          ) : (
            <LinkButton url='/secure/dashboard' text='View' />
          )
        ) : group.isJoined ? (
          <JoinedContainer>
            <LinkButton url='/secure/dashboard' text='View' />
          </JoinedContainer>
        ) : (
          <LinkButton url='/secure/dashboard' text='View' />
        )}
      </div>
    </li>
  )
})`
  border-bottom: 1px solid #e2e2e2;
  padding: 2em;
  margin-bottom: 1.2em;
  background-color: ${props => (props.isSelected ? '#F6F6F6' : 'none')};

  a {
    width: 104px;
  }

  > div:first-child {
    h5 {
      font-size: 1.01rem;
      color: #111111;
      margin: 0 0 0.7em 0;
    }
    span:first-child {
      margin-right: 0.2em;
    }
    p {
      color: #9fa6ad;
      margin-bottom: 1em;
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
