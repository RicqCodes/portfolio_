"use client";
import { styled } from "styled-components";
import Letter from "../../Common/AnimatedLetter";
import PageContainer from "../_molecules/PageContainer";

const Articles = () => {
  return (
    <PageContainer>
      <InnerContent>
        <Letter text="Articles are coming soon" />
      </InnerContent>
    </PageContainer>
  );
};

export default Articles;

const MainContainer = styled.div`
  width: 100%;
`;

const InnerContent = styled.div`
  width: 100%;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  font-size: 18rem;
  height: calc(100vh - 22rem);
`;
