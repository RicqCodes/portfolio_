"use client";
import React from "react";
import { styled } from "styled-components";
import PageContainer from "../_molecules/PageContainer";
import Letter from "@/app/components/Common/AnimatedLetter";
import ImageCard from "../_molecules/ImageCard";
import { projectDetails } from "./_molecules/projectDetails";
import CardDetails from "./CardDetails";
import { Variants, motion } from "framer-motion";

const Projects = () => {
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: i * 0,
      },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: 200,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150,
        duration: 3,
      },
    },
  };
  return (
    <PageContainer>
      <InnerContainer>
        <Letter text="Lines of Logic, Art of Creation: My Project Showcase." />
        <Container initial="hidden" animate="visible" variants={container}>
          {projectDetails.map((project) => {
            return (
              <motion.div key={project.id} variants={child}>
                <ImageCard
                  img={project.image}
                  alt={`${project.name} image`}
                  fullWidth
                  fixedHeight
                  ExtraComp={
                    <CardDetails
                      tag={project.tag}
                      buildTools={project.builtTool}
                      name={project.name}
                      description={project.description}
                      repo={project.repo}
                      url={project.url}
                    />
                  }
                />
              </motion.div>
            );
          })}
        </Container>
      </InnerContainer>
    </PageContainer>
  );
};

export default Projects;

const InnerContainer = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 10.4rem;
`;

const Container = styled(motion.div)`
  width: 100%;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 5rem;
  column-gap: 5rem;
  margin-bottom: 16rem;

  > div {
    @media (max-width: 50em) {
      grid-column: span 2 / span 2;
    }
  }

  @media (max-width: 30em) {
    margin-bottom: 4rem;
  }
`;
