"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import {
  bounce,
  bounceIn,
  opaque,
  slideInDown,
  slideInLeft,
  slideInRight,
} from "@/styles/animate.styled";
import PageContainer from "../_molecules/PageContainer";
import ImageCard from "../_molecules/ImageCard";

const FramerImage = motion(Image);

const Home: React.FC = () => {
  return (
    <PageContainer linearBg fullHeight>
      <InnerContent>
        <Article>
          <Content>
            <Text>
              <h1 aria-label="Front Developer">
                <span>
                  Frontend & Blockchain
                  <br /> Developer
                  <span>.</span>
                </span>
              </h1>
              <p>
                I take pleasure in creating robust and scalable frontend
                products that provide exceptional user experiences.
              </p>
            </Text>
            <InnerContentBottom>
              <Ul aria-label="Highlights.">
                <li>
                  possess strong expertise in progressive enhancement, and UI
                  engineering.
                </li>
                <li>
                  3 years of experience in building products for clients across
                  various countries.
                </li>
              </Ul>
            </InnerContentBottom>
          </Content>
        </Article>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <ImageCard img="/code-snippet.jpg" alt="code snippet" />
        </motion.div>
      </InnerContent>
    </PageContainer>
  );
};

export default Home;

const InnerContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-top: calc(14.91rem);

  @media (max-width: 58em) {
    flex-direction: column-reverse;
    height: 100%;
    margin-top: 0;
    gap: 2.4rem;
    margin-bottom: 2.4rem;
  }
`;

const Article = styled.article`
  margin-top: -5.04rem;
  text-align: left;
  position: relative;

  @media (max-width: 58em) {
    margin-top: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 3.6rem;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    margin: 0;
    font-size: 5.33rem;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.19rem;

    animation: ${slideInLeft} 0.8s ease-in;
  }
  p {
    margin: 0;
    font-size: 1.88rem;
    width: 30vw;
    opacity: 0.7;
    animation: ${slideInDown} 0.8s ease-in;
    line-height: 1.6;
  }

  @media (max-width: 58em) {
    text-align: center;
    h1 {
      font-size: 4rem;
    }

    p {
      width: 100%;
    }
  }

  & h1 > span > span {
    margin-left: 0.5rem;
  }
`;

const InnerContentBottom = styled.div`
  align-self: flex-start;
  display: flex;
  width: 100%;
`;

const Ul = styled.ul`
  display: flex;
  gap: 3rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
  width: 45vw;
  line-height: 1.6;
  opacity: 0.5;

  li:first-child {
    animation: ${opaque} 0.8s ease-in;
  }
  li:last-child {
    animation: ${opaque} 1.4s ease-in;
  }

  @media (max-width: 58em) {
    width: 100%;
    justify-content: center;
    text-align: center;
    li {
      width: 40%;
    }
  }
`;
