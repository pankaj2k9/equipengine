import styled from 'styled-components'
import Box from 'base_components/Box'

export default styled(Box)`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 78px;
    color: #fff;

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

  .containerControllButton > div{
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
      padding-top: 139px;

      h3 {
        width: 714px;
      }
    }
  }
`
