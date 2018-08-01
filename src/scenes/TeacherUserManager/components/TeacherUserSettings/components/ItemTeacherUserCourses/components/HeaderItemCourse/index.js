import React from "react"
import styled from "styled-components"
import { compose, flattenProp } from "recompose"

import CircleProgressBar from "base_components/CircleProgressBar"

const HeaderItemCourse = ({ className, title, description }) => (
  <header className={className}>
    <div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
    <div>
      <div />
      <CircleProgressBar
        className={`${className}__progress`}
        strokeWidth={10}
        percentage={(10 / 20) * 100}
      />
      <span>11 of 22 Completed</span>
    </div>
  </header>
)

export default compose(
  flattenProp("course"),
  c => styled(c)`
    &__progress {
      width: 34px;
      height: 34px;
      margin-right: 10px;
    }

    > div:first-child {
      h5 {
        font-size: 1.09rem;
        color: #111111;
        margin-top: 0;
      }

      p {
        color: #9fa6ad;
        padding-right: 20px;
      }
    }

    > div:last-child {
      display: flex;
      align-items: center;
      margin-bottom: 1.3em;

      span {
        color: #9fa6ad;
        width: 71px;
      }
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  `
)(HeaderItemCourse)
