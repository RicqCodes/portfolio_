import Letter from "@/app/components/Common/AnimatedLetter";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import { styled } from "styled-components";

import AnimatedTracker from "@/app/components/Common/AnimatedTracker";
import Experience from "./Experience";
import { experienceData } from "./data";

const Experiences = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"],
  });

  return (
    <MainContainer>
      <Letter text="Experiences" />
      <InnerContainer ref={containerRef}>
        <AnimatedTracker scrollYProgress={scrollYProgress} />
        <ExperienceContainer>
          {experienceData.map((exp) => (
            <Experience
              key={exp.id}
              pos={exp.position}
              comp={exp.company}
              desc={exp.description}
              period={exp.period}
              location={exp.location}
              showDuration
            />
          ))}
        </ExperienceContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default Experiences;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.2rem;
  max-width: 86rem;
  width: 100%;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  display: flex;
  position: relative;
  gap: 4rem;
  height: 100%;
`;

const ExperienceContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  margin-left: 4rem;
`;
