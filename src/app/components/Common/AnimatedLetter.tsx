import { FC, useEffect, useRef } from "react";
import {
  motion,
  Variants,
  HTMLMotionProps,
  useInView,
  animate,
  useAnimate,
} from "framer-motion";
import { styled } from "styled-components";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  duration?: number;
}

const Letter: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  ...props
}: Props) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        // when
        staggerChildren: duration,
        delayChildren: i * delay,
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
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <Heading
      variants={container}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </Heading>
  );
};

export default Letter;

const Heading = styled(motion.h1)`
  display: flex;
  overflow: hidden;

  display: flex;
  font-weight: 600;
  font-size: 4.6rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 30em) {
    font-size: 3.8rem;
  }
`;
