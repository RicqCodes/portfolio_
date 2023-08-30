import React, { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useTransform } from "framer-motion";
const NumberCountAnimation = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    let controls;
    if (isInView) {
      controls = animate(motionValue, value, { duration: 2 });
    }

    return controls?.stop;
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default NumberCountAnimation;
