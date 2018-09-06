import { Modal } from "react-bootstrap"
import styled from "styled-components"

export const ThreadModal = styled(Modal)`
  .modal-dialog {
    width: 100%;
    height: 100%;
    margin: 0;

    .modal-content {
      display: flex;
      flex-direction: column;

      border-radius: 0;
      border: 0;
      min-height: 100vh;
      max-height: 100vh;
      position: relative;
    }
  }
`
