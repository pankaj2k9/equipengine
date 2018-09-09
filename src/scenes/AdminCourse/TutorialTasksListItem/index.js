import React from "react"
import IconMenu from "react-icons/lib/md/dehaze"
import IconClose from "react-icons/lib/md/close"
import { isNil } from "ramda"
import styled from "styled-components"
//
import Button, { IconButton } from "base_components/RootButton"
import ContainerFlex from "base_components/ContainerFlex"
import UpdateTaskModal from "../UpdateTaskModal"
import modal from "hoc/modal"

const TasksListItem = ({
  className,
  task,
  onOpen,
  onClose,
  isOpen,
  onUpdate,
  onDelete
}) => (
  <div className={className}>
    <ContainerFlex isAlignCenter>
      <i>
        <IconMenu />
      </i>
      <div>
        <p>{task.description}</p>
        {!isNil(task.fileRef) && (
          <Button light lightBorder>
            Download
          </Button>
        )}
      </div>
    </ContainerFlex>
    <ContainerFlex>
      <Button secondary onClick={onOpen}>
        Edit
      </Button>
      <IconButton onClick={() => onDelete(task)}>
        <IconClose />
      </IconButton>
    </ContainerFlex>
    <UpdateTaskModal
      isOpen={isOpen}
      task={task}
      onClose={onClose}
      onSubmit={onUpdate}
    />
  </div>
)

export default modal(styled(TasksListItem)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: #d8d8d8;
  padding: 1.3em;

  i {
    font-size: 1.4rem;
  }

  div:last-child {
    button:first-child {
      margin-right: 0.7em;
    }
  }

  div:first-child {
    i {
      margin-right: 0.7em;
    }

    > div {
      span {
        color: #d8d8d8;
      }

      p {
        color: #111111;
        font-size: 1rem;
        margin-top: 0.4em;
      }
    }
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`)
