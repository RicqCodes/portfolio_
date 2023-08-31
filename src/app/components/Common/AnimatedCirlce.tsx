import React, { RefObject } from "react";
import { styled } from "styled-components";
import { motion, useScroll } from "framer-motion";

const AnimatedCirlce = ({ entryRef }: { entryRef: RefObject<HTMLElement> }) => {
  const { scrollYProgress } = useScroll({
    target: entryRef,
    offset: ["start end", "end end"],
  });
  console.log(scrollYProgress);
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
  stroke: #1b1b1b;
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
      stroke: #7645da;
      fill: none;
    }
    circle:nth-child(2) {
      stroke-width: 5px;
      fill: #f5f5f5;
    }

    circle:nth-child(3) {
      stroke-width: 1;
      fill: #7645da;
      /* .animate-pulse {
    animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite;
} */
    }
  }
`;
