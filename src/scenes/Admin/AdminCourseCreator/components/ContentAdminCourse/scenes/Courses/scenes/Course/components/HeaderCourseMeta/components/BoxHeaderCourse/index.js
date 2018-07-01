import styled from "styled-components"
import Box from "base_components/Box"

export default styled(Box)`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  header {
    display: flex;
    width: 100%;
    color: #fff;
    flex-direction: column;
    padding-top: 10px;
    align-items: start;
    justify-content: space-between;

    .course-sm-img {
      border: 1px solid #979797;
      border-radius: 3px;

      img {
        width: 211px;
      }
    }

    h3 {
      width: 40px;
      margin-top: 0px;
      font-size: 1.8rem;
      font-weight: 800;
      margin-bottom: 0.5em;
      text-transform: capitalize;
      color: #ffffff;
    }
  }

  .containerControllButton > div {
    font-size: 12px;
    margin-right: 4em;

    &:last-child {
      margin-right: 0;
    }

    img {
      margin-right: 0.9em;
    }
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 6%;
  }

  @media screen and (min-width: 768px) {
    height: 245px;

    header {
      padding-top: 11px;
      height: 100%;

      h3 {
        width: 714px;
      }
    }
  }
`
