"use client";
import React from "react";
import { styled } from "styled-components";

import PageContainer from "../_molecules/PageContainer";
import Biography from "./_molecules/Biography";
import Skills from "./_molecules/Skills";
import Experiences from "./_molecules/Experiences";

const About = () => {
  return (
    <PageContainer>
      <InnerContainer>
        <Biography />
        <Skills />
        <Experiences />
      </InnerContainer>
    </PageContainer>
  );
};

export default About;

const InnerContainer = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 18.4rem;
`;
