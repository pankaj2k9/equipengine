import React from 'react';
import styled from 'styled-components';
//
import LoginBox from './components/LoginBox';

// styled component
const ContainerLogin = styled.div`
  background: #f5f5f5;
  height: 100vh;
  position: relative;
`;

// Container Login component
const Login = () => (
  <ContainerLogin>
    <LoginBox />
  </ContainerLogin>
);

export default Login;
