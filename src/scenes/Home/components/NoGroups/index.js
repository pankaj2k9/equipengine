import React from "react"
import styled from "styled-components"
import IconInfo from "react-icons/lib/fa/info-circle"

const NoGroups = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <p>
          You are not part of any groups. Contact the system administrator about
          joining a group.
        </p>
        <p>
          <span>
            <IconInfo />
          </span>
          <span>Learn more about groups</span>
        </p>
      </div>
    </div>
  )
}

export default styled(NoGroups)`
  padding: 1em 0;
  margin-bottom: 1em;

  p {
    color: #9fa6ad;
    margin-bottom: 0;
    text-align: inherit;
    font-size: 12px;
    padding-left: 18px;
  }

  p:nth-child(2) {
    margin-top: 1em;
    color: #0d90e0;
  }

  span:first-child {
    margin-right: 0.5em;
    position: relative;
    top: -3px;
  }

  @media screen and (min-width: 768px) {
    display: flex;

    > div:first-child {
      margin-right: 1em;
    }
  }
`
