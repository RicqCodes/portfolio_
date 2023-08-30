"use client";
import React from "react";
import { styled } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  margin: auto;
  position: relative;

  :focus {
    outline: none;
  }

  @media (min-width: 701px) {
    touch-action: none;
  }
`;
