import React, { useRef } from "react";
import { styled } from "styled-components";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCalendar2Check } from "react-icons/bs";

import { motion, useScroll } from "framer-motion";
import AnimatedCirlce from "@/app/components/Common/AnimatedCirlce";

const MONTHS: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const parseMonthYear = (value: string) => {
  const [monthName, yearStr] = value.trim().split(" ");
  const monthIndex = MONTHS[monthName];
  const year = Number(yearStr);

  if (Number.isNaN(year) || monthIndex === undefined) {
    return null;
  }

  return new Date(year, monthIndex, 1);
};

const formatDuration = (start: Date, end: Date) => {
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (totalMonths <= 0) {
    return "Less than 1 mo";
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years) {
    parts.push(`${years} yr${years === 1 ? "" : "s"}`);
  }

  if (months) {
    parts.push(`${months} mo${months === 1 ? "" : "s"}`);
  }

  return parts.join(" ");
};

const getDurationText = (period: string) => {
  if (!period.includes("-")) {
    return "";
  }

  const [startPart, endPartRaw] = period.split("-").map((part) => part.trim());
  const startDate = parseMonthYear(startPart);

  if (!startDate) {
    return "";
  }

  const endPart = endPartRaw || "";
  const endDate =
    endPart.toLowerCase() === "present" ? new Date() : parseMonthYear(endPart);

  if (!endDate) {
    return "";
  }

  return formatDuration(startDate, endDate);
};

const Experience = ({
  pos,
  comp,
  desc,
  period,
  location,
  showDuration = false,
}: {
  pos: string;
  comp: string;
  desc: string;
  period: string;
  location: string;
  showDuration?: boolean;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const durationText = showDuration ? getDurationText(period) : "";

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
            {durationText ? ` (${durationText})` : ""}
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
