"use client";
import React from "react";
import { styled } from "styled-components";

import PageContainer from "../_molecules/PageContainer";
import Biography from "./_molecules/Biography";
import Skills from "./_molecules/Skills";
import Experiences from "./_molecules/Experiences";
import Education from "./_molecules/Education";
// import LoadingComponent from "../../Common/LoadingComponent";

const About = () => {
  return (
    <>
      {/* <LoadingComponent /> */}
      <PageContainer>
        <InnerContainer>
          <Biography />
          <Skills />
          <Experiences />
          <Education />
        </InnerContainer>
      </PageContainer>
    </>
  );
};

export default About;

const InnerContainer = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 18.4rem;
  margin-bottom: 24rem;

  @media (max-width: 30em) {
    gap: 8rem;
    margin-bottom: 4rem;
  }
`;
