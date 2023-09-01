import React from "react";
import { styled } from "styled-components";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const M = React.forwardRef((props, ref) => (
  <BsMoonStarsFill {...props} ref={ref} />
));

const S = React.forwardRef((props, ref) => (
  <BsFillSunFill {...props} ref={ref} />
));

const Moon = motion(M);
const Sun = motion(S);

const ThemeSwitch = ({ theme }: { theme: string }) => {
  return (
    <Container>
      <AnimatePresence>
        {theme === "light" ? (
          //   <Moon initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="moon" />
          <BsMoonStarsFill />
        ) : (
          //   <Sun initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="sun" />
          <BsFillSunFill />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default ThemeSwitch;

const Container = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondaryColor};

  svg {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 1.9rem;
  }
`;
