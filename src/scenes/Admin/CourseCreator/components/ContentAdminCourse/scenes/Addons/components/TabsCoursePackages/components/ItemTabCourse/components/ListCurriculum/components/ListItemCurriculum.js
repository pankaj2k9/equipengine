import React from "react"
//
import styled from "styled-components"
//
import imageBackground from "resources/images/background-image.png"
//
import LinkButton from "base_components/LinkButton"
import ButtonAdd from "base_components/ButtonAdd"

const ListItemCurriculum = ({ className }) => (
  <article className={className}>
    <header className={`${className}__header`}>
      <span />
    </header>
    <section>
      <header>
        <h6>The AccessTruth Curriculum</h6>
      </header>
      <p>
        This group is for people who are in level 3 pathway in the Connect
        Program.
      </p>
      <div className={`${className}__buttonGroup`}>
        <LinkButton text="Details" url="/details" />
        <ButtonAdd
          className={`${className}__buttonAdd`}
          text="Add to library"
          iconPosition="left"
        />
      </div>
    </section>
  </article>
)

export default styled(ListItemCurriculum)`
  border-radius: 5px;
  border: 1px solid #d8d8d8;
  margin-bottom: 1em;

  &:last-child {
    margin-bottom: 0;
  }

  &__buttonAdd {
    background-color: #338ffc;
    color: #ffffff;

    i {
      margin-left: 0;
    }
  }

  &__header {
    position: relative;
    height: 148px;
    background-image: url(${imageBackground});
    background-repeat: no-repeat;
    background-size: cover;

    span {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 16px;
      background-color: #595959;
    }
  }

  section {
    padding: 0 1em;

    header h6 {
      color: #111111;
      font-size: 1rem;
      font-weight: 800;
    }

    p {
      color: #9fa6ad;
    }
  }

  &__buttonGroup {
    a {
      width: 100%;
      margin-bottom: 1em;
      padding: 10px 0;
    }

    button {
      margin-bottom: 1.5em;
    }
  }

  @media screen and (min-width: 768px) {
    width: 32.5%;
    margin-bottom: 1.5em;

    section {
      padding: 0 1.3em;

      p {
        margin-bottom: 2em;
      }
    }

    &__buttonGroup {
      display: flex;
      justify-content: space-between;

      a,
      button {
        width: 49%;
      }

      button {
        width: 49%;
        height: 37px;
        margin: 0.6em 0 1em;
      }
    }
  }
`
