import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import UserAvatar from "base_components/UserAvatar"

const HasDiscussions = styled(({ className, discussions, onSelect }) => {
  // creating list of discussion list
  const listDiscussions = discussions.map((item, i) => (
    <li className={className} key={i}>
      <UserAvatar small image={item.avatarURL} />
      <p>
        {`${item.name} `}
        <button onClick={() => onSelect(item.task.meta.id)} type="button">
          {item.task.action}
        </button>
        {` ${item.task.meta.title}`}
      </p>
      <div>
        <span>{item.date.day}</span>
        <span>{item.date.time}</span>
      </div>
    </li>
  ))
  return <ul className={className}>{listDiscussions}</ul>
})`
  li {
    display: flex;
    flex-direction: column;
    color: #111111;
    font-size: 12px;
    margin-bottom: 1.6em;

    img,
    p {
      margin-bottom: 0.7rem;
      max-width: 250px;
      text-align: inherit;

      button {
        display: inline;

        padding: 0;
        margin: 0;

        border: none;
        background: transparent;

        color: #2093e9;
        font-weight: bold;
      }
    }

    > div {
      color: #7e7e7e;

      span:first-child {
        margin-right: 0.7em;
      }
    }
  }

  @media screen and (min-width: 768px) {
    li {
      flex-direction: row;
      align-items: center;

      img,
      p {
        margin-bottom: 0;
        margin-right: 0.7em;
      }

      div {
        display: flex;
        flex-direction: column;
      }
    }
  }
`

const ListDiscussion = ({ discussions, onSelect }) => {
  return discussions.length ? (
    <HasDiscussions discussions={discussions} onSelect={onSelect} />
  ) : (
    <p
      style={{
        color: "#CECECE",
        fontSize: 14
      }}
    >
      No discussion to show
    </p>
  )
}

ListDiscussion.propTypes = {
  discussions: PropTypes.array.isRequired
}

export default ListDiscussion
