import React, { RefObject } from "react";
import { styled } from "styled-components";
import { motion, MotionValue } from "framer-motion";

const AnimatedCirlce = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  return (
    <Figure>
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="20" />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle cx="75" cy="50" r="10" />
      </svg>
    </Figure>
  );
};

export default AnimatedCirlce;

const Figure = styled.figure`
  stroke: ${({ theme }) => theme.colors.secondaryColor};
  left: -3.6rem;
  position: absolute;

  svg {
    --tw-rotate: -90deg;
    transform: translate(0, 0) rotate(var(--tw-rotate)) skewX(0) skewY(0)
      scaleX(1) scaleY(1);
    display: block;
    vertical-align: middle;

    circle:nth-child(1) {
      stroke-width: 1;
      stroke: ${({ theme }) => theme.colors.variantColor};
      fill: none;
    }
    circle:nth-child(2) {
      stroke-width: 5px;
      fill: ${({ theme }) => theme.colors.primaryColor};
    }

    circle:nth-child(3) {
      stroke-width: 1;
      fill: ${({ theme }) => theme.colors.variantColor};
      /* .animate-pulse {
    animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite;
} */
    }
  }
`;
