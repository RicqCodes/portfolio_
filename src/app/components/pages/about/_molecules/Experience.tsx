import React, { useRef } from "react";
import { styled } from "styled-components";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCalendar2Check } from "react-icons/bs";

import { motion, useScroll } from "framer-motion";
import AnimatedCirlce from "@/app/components/Common/AnimatedCirlce";

const Experience = ({
  pos,
  comp,
  desc,
  period,
  location,
}: {
  pos: string;
  comp: string;
  desc: string;
  period: string;
  location: string;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <MainContainer>
      <AnimatedCirlce scrollYProgress={scrollYProgress} />
      <ExperienceContainer
        ref={ref}
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        viewport={{ once: true, margin: "-20%" }}
      >
        <h5>
          {pos}
          <a href="" target="_blank" rel="noreferrer">
            {!comp ? "" : `@${comp}`}
          </a>
        </h5>
        <span>
          <span>
            <BsCalendar2Check />
            {period}
          </span>
          <span>|</span>
          <span>
            <MdOutlineLocationOn /> {location}
          </span>
        </span>
        <p>{desc}</p>
      </ExperienceContainer>
    </MainContainer>
  );
};

export default Experience;

const MainContainer = styled.li`
  display: inline;
`;

const ExperienceContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  > h5 {
    font-size: 2rem;
    font-weight: 600;

    a {
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.variantColor};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > span {
    width: 100%;
    font-size: 1.6rem;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    flex-wrap: wrap;

    > span {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${({ theme }) => theme.colors.variantColor};

      svg {
        font-size: 1.6rem;
      }
    }

    > span:last-child {
      svg {
        font-size: 2rem;
      }
    }
  }
`;
