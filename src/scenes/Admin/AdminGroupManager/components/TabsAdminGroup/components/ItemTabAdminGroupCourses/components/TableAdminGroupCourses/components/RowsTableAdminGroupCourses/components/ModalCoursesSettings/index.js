import React from 'react';
import styled from 'styled-components';
// base components
import Button from 'base_components/RootButton';
import Panel from 'base_components/Panel';
// for modal
import modal from 'hoc/modal';
import { Modal } from 'react-bootstrap';
// assets
import iconSettings from 'resources/images/iconSettings.svg';
import iconBigSettings from 'resources/images/iconBigSettings.svg';

// styled button settings to use for opening modal.
const ButtonSettings = Button.extend`
  margin-right: 0.8em;
  height: fit-content;
  width: fit-content;
  padding: 0;

  img {
    height: 100%;
    width: 100%;
  }
`;

const ModalHeaderCourses = styled(({ className }) => (
  <header className={className}>
    <img alt="icon big settings" src={iconBigSettings} />
    <h4>Group Settings for: Communication and Culture</h4>
  </header>
))`
  padding: 25px 35px;
  border-bottom: 1px solid #dadada;
  display: flex;
  align-items: center;

  h4 {
    font-size: 1.1rem;
    color: #000000;
    font-weight: 800;
    line-height: 1.4;
    margin: 0 0 0 20px;
    width: 242px;
  }
`;

const ModalBodyCourses = styled(({ className }) => (
  <div className={className}>
    <div>
      <Panel title="Course Rules">Course Rules</Panel>
      <Panel>who is able</Panel>
      <Panel title="Features" />
      <Panel>pause course</Panel>
    </div>
  </div>
))`
  padding: 25px 35px;

  section {
    width: 100%;

    &:first-child {
      padding-top: 0px;
    }
  }
`;

// container of modal courses settings
const ContainerModalCourses = styled.div`
  display: inline-block;
`;

const ModalCoursesSettings = ({ isOpen, onOpen, onClose }) => (
  <ContainerModalCourses>
    <ButtonSettings onClick={onOpen}>
      <img alt="icon settings" src={iconSettings} />
    </ButtonSettings>
    <Modal show={isOpen} onHide={onClose}>
      <ModalHeaderCourses />
      <ModalBodyCourses />
    </Modal>
  </ContainerModalCourses>
);

export default modal(ModalCoursesSettings);
