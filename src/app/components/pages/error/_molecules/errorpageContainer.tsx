import React, { ReactNode } from "react";
import { styled } from "styled-components";

interface IProps {
  children: ReactNode;
}
const ErrorpageContainer = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};

export default ErrorpageContainer;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 18rem);
  display: flex;
  align-items: center;
  padding: 2.4rem;
  justify-content: center;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
`;
