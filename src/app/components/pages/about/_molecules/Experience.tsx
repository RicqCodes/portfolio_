import React, { useRef } from "react";
import { styled } from "styled-components";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCalendar2Check } from "react-icons/bs";

import { motion } from "framer-motion";
import AnimatedCirlce from "@/app/components/Common/AnimatedCirlce";

const Experience = () => {
  const ref = useRef(null);
  return (
    <MainContainer>
      <AnimatedCirlce entryRef={ref} />
      <ExperienceContainer ref={ref}>
        <h3>
          Lead Full-Stack Software Engineer
          <a href="" target="_blank" rel="noreferrer">
            @RGS
          </a>
        </h3>
        <span>
          <span>
            <BsCalendar2Check />
            2012 - 2017
          </span>
          <span>|</span>
          <span>
            <MdOutlineLocationOn /> London
          </span>
        </span>
        <p>
          Worked on a team responsible for the delivery of a web app that
          provides a set of tools and features which enable its community of
          users to coordinate ideas, influence, and funds, that is peer-to-peer,
          open, and includes its own incentive system of user actions to ensure
          accountability, quality engagement and verifiable information over
          time.
        </p>
      </ExperienceContainer>
    </MainContainer>
  );
};

export default Experience;

const MainContainer = styled.div``;

const ExperienceContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  > h3 {
    font-size: 2rem;
    font-weight: 600;

    a {
      margin-left: 1rem;
      color: #7645da;
    }
  }

  > span {
    width: 100%;
    font-size: 1.6rem;
    display: flex;
    gap: 1rem;
    align-items: center;

    > span {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      svg {
        font-size: 1.6rem;
        color: blue;
      }
    }

    > span:last-child {
      svg {
        font-size: 2rem;
        color: red;
      }
    }
  }
`;
