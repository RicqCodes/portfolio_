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
          <Moon animate={{ opacity: 1 }} key="moon" />
        ) : (
          <BsFillSunFill style={{}} />
          //   <Sun
          //     animate={{ rotate: 180 }}
          //     transition={{ repeat: Infinity }}
          //     key="sun"
          //   />
          //   <BsFillSunFill />
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

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 1.9rem;
    animation: rotate 10s linear infinite;
  }
`;
