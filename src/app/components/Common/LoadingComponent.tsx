import React from "react";
import { styled } from "styled-components";

const LoadingComponent = () => {
  return <LoadingContainer>LoadingComponent</LoadingContainer>;
};

export default LoadingComponent;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
`;
