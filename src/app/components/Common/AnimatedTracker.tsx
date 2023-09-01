import React from "react";
import { styled } from "styled-components";
import { MotionValue, motion } from "framer-motion";

const AnimatedTracker = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  return <Tracker style={{ scaleY: scrollYProgress }} />;
};

export default AnimatedTracker;

const Tracker = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  transform-origin: top;
  width: 4px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
