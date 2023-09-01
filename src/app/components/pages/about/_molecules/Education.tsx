import Letter from "@/app/components/Common/AnimatedLetter";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import { styled } from "styled-components";

import Experience from "./Experience";
import { educationData } from "./data";
import AnimatedTracker from "@/app/components/Common/AnimatedTracker";

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"],
  });

  return (
    <MainContainer>
      <Letter text="Education" />
      <InnerContainer ref={containerRef}>
        <AnimatedTracker scrollYProgress={scrollYProgress} />
        <ExperienceContainer>
          {educationData.map((exp) => (
            <Experience
              key={exp.id}
              pos={exp.position}
              comp={exp.company}
              desc={exp.description}
              period={exp.period}
              location={exp.location}
            />
          ))}
        </ExperienceContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default Education;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.2rem;
  max-width: 86rem;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  position: relative;
  gap: 4rem;
  height: 100%;
  padding-bottom: 20rem;
`;

const ExperienceContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  margin-left: 4rem;
`;
