"use client";
import React from "react";
import { styled, ThemeProvider } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import { useDarkMode } from "@/hooks/useTheme";
import { lightTheme, darkTheme } from "@/styles/theme";
import GlobalStyles from "@/styles/global/global.styled";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, themeToggler } = useDarkMode();

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Container>
          <Header theme={theme} themeToggler={themeToggler} />
          <Main>{children}</Main>
          {/* <Footer /> */}
        </Container>
      </ThemeProvider>
    </>
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
