import React from "react"
import styled from "styled-components"
import { compose, flattenProp } from "recompose"

const HeaderItemCourse = ({ className, name, description }) => (
  <header className={className}>
    <div>
      <h5>{name}</h5>
      <p>{description}</p>
    </div>
    <div>
      <div />
      <span>0 of 22 Completed</span>
    </div>
  </header>
)

export default compose(
  flattenProp("course"),
  c => styled(c)`
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

      div {
        width: 34px;
        height: 34px;
        border: 4px solid #979797;
        border-radius: 50%;
        margin-right: 0.7em;
      }

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
