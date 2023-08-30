import Letter from "@/app/components/Common/AnimatedLetter";
import React from "react";
import { styled } from "styled-components";

const Experiences = () => {
  return (
    <MainContainer>
      <Letter text="Experiences" />
    </MainContainer>
  );
};

export default Experiences;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.2rem;
`;
