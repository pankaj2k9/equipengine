import React from 'react'
import styled from 'styled-components'
//
import imageBackground from 'resources/images/background-image.png'
import LinkButton from 'base_components/LinkButton'
import ButtonAdd from 'base_components/ButtonAdd'

const ListItemCurriculum = styled(({className}) => (
  <article className={className}>
    <header>
      <span />
    </header>
    <section>
      <header>
        <h6>The AccessTruth Curriculum</h6>
      </header>
      <p>
        This group is for people who are in level 3 pathway in the Connect Program.
      </p>
      <div className='ListItem__buttonGroup'>
        <LinkButton text='Details' url='/details' />
        <ButtonAdd text='Add to library' iconPosition='left' />
      </div>
    </section>
  </article>
))`
  border-radius: 5px;
  border: 1px solid #D8D8D8;
  margin-bottom: 1em;

  &:last-child {
    margin-bottom: 0;
  }

  > header {
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
      color: #9FA6AD;
    }

    .ListItem__buttonGroup {

      a {
        width: 100%;
        margin-bottom: 1em;
        padding: 10px 0;
      }

      button {
        margin-bottom: 1.5em;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 32.5%;
    margin-bottom: 1.5em;
  }
`

const ContainerListCurriculum = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const ListCurriculum = () => (
  <ContainerListCurriculum>
    <ListItemCurriculum />
    <ListItemCurriculum />
    <ListItemCurriculum />
    <ListItemCurriculum />
  </ContainerListCurriculum>
)

export default ListCurriculum
