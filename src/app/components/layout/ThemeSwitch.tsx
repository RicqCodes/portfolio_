import React from "react";
import { styled } from "styled-components";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

const ThemeSwitch = ({ theme }: { theme: string }) => {
  return (
    <Container>
      {theme === "light" ? <BsMoonStarsFill /> : <BsFillSunFill />}
    </Container>
  );
};

export default ThemeSwitch;

const Container = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondaryColor};

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 1.9rem;
    animation: rotate 10s linear infinite;
  }
`;
