import Letter from "@/app/components/Common/AnimatedLetter";
import React from "react";
import { styled } from "styled-components";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiRedux,
  SiSolidity,
  SiNextdotjs,
  SiPhp,
  SiExpress,
  SiGithub,
  SiDocker,
  SiTailwindcss,
  SiWeb3Dotjs,
  SiMysql,
  SiStyledcomponents,
  SiGraphql,
  SiAuth0,
} from "react-icons/si";
import { LuHardHat } from "react-icons/lu";
import { Variants, motion } from "framer-motion";

const Skills = () => {
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: i * 0,
      },
    }),
  };

  const child2: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      rotate: 360,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      x: 300,
      rotate: 320,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 3,
      },
    },
  };
  const child: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      rotate: 180,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      x: -300,
      rotate: 145,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 3,
      },
    },
  };

  return (
    <MainContainer>
      <Letter text="skills" />
      <ContentContainer
        initial="hidden"
        variants={container}
        whileInView={"visible"}
        viewport={{ once: true, margin: "-30%" }}
      >
        <Wall variants={child}>
          <h3>Languages & Frameworks</h3>
          <WallContainer>
            <VBoxes>
              <Box
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, stiffness: 50 }}
              >
                <span>HTML</span>
                <BoxFace>
                  <h4>
                    <SiHtml5 />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </h4>
                </BoxBack>
              </Box>
              <Box>
                <span>CSS</span>
                <BoxFace>
                  <h4>
                    <SiCss3 />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
              <Box>
                <span>Javascript</span>
                <BoxFace>
                  <h4 className="box-text">
                    <SiJavascript />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4 className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </h4>
                </BoxBack>
              </Box>
              <Box>
                <span>React</span>
                <BoxFace>
                  <h4>
                    <SiReact />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
            </VBoxes>
            <VBoxes>
              <Box>
                <span>Typescript</span>
                <BoxFace>
                  <h4>
                    <SiTypescript />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
              <Box>
                <span>NodeJS</span>
                <BoxFace>
                  <h4>
                    <SiNodedotjs />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
              <Box>
                <span>PHP</span>
                <BoxFace>
                  <h4>
                    <SiPhp />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
            </VBoxes>
            <VBoxes>
              <Box>
                <span>Solidity</span>
                <BoxFace>
                  <h4>
                    <SiSolidity />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
              <Box>
                <span>NextJS</span>
                <BoxFace>
                  <h4>
                    <SiNextdotjs />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
            </VBoxes>
            <VBoxes>
              <Box>
                <span>ExpressJS</span>
                <BoxFace>
                  <h4>
                    <SiExpress />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
            </VBoxes>
          </WallContainer>
        </Wall>
        <Wall variants={child2}>
          <h3>Tools & Libraries</h3>
          <WallContainer>
            <VBoxes>
              <Box>
                <span>Redux</span>
                <BoxFace>
                  <h4>
                    <SiRedux />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </h4>
                </BoxBack>
              </Box>
              <Box>
                <span>Github</span>
                <BoxFace>
                  <h4>
                    <SiGithub />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
              <Box>
                <span>Docker</span>
                <BoxFace>
                  <h4 className="box-text">
                    <SiDocker />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4 className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </h4>
                </BoxBack>
              </Box>
              <Box>
                <span>Tailwind</span>
                <BoxFace>
                  <h4>
                    <SiTailwindcss />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
            </VBoxes>
            <VBoxes>
              <Box>
                <span>Hardhat</span>
                <BoxFace>
                  <h4>
                    <LuHardHat />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
              <Box>
                <span>Web3JS</span>
                <BoxFace>
                  <h4>
                    <SiWeb3Dotjs />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
              <Box>
                <span>MySQL</span>
                <BoxFace>
                  <h4>
                    <SiMysql />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
            </VBoxes>
            <VBoxes>
              <Box>
                <span>Styled Comp</span>
                <BoxFace>
                  <h4>
                    <SiStyledcomponents />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
              <Box>
                <span>GraphQL</span>
                <BoxFace>
                  <h4>
                    <SiGraphql />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
            </VBoxes>
            <VBoxes>
              <Box>
                <span>Auth0</span>
                <BoxFace>
                  <h4>
                    <SiAuth0 />
                  </h4>
                </BoxFace>
                <BoxBack>
                  <h4>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </h4>
                </BoxBack>
              </Box>
            </VBoxes>
          </WallContainer>
        </Wall>
      </ContentContainer>
    </MainContainer>
  );
};

export default Skills;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.2rem;
`;

const ContentContainer = styled(motion.section)`
  display: flex;
  justify-content: center;
  gap: 8rem;
  flex-wrap: wrap;
  overflow: hidden;

  @media (max-width: 30em) {
    gap: 0;
  }
`;

const Wall = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  h3 {
    position: absolute;
    font-size: 2.4rem;
    font-weight: 600;
  }

  &:first-child {
    transform: rotate(180deg);

    h3 {
      bottom: 11rem;
      right: -4rem;
      transform: rotate(135deg);
    }

    > div {
      > div {
        > div {
          transform: rotate(225deg);
        }
      }
    }
  }

  &:last-child {
    h3 {
      bottom: 10rem;
      right: 2rem;
      transform: rotate(-45deg);
    }

    @media (max-width: 30em) {
      margin-top: -12rem;
    }
  }
`;

const WallContainer = styled.div`
  display: flex;
`;

const VBoxes = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-left: -7.5rem;
  }

  &:nth-child(2) {
    margin-top: 7.5rem;
  }
  &:nth-child(3) {
    margin-top: 15rem;
  }
  &:nth-child(4) {
    margin-top: 22.5rem;
  }
`;

const Box = styled(motion.div)`
  width: 10rem;
  height: 10rem;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
  margin: 25px;
  cursor: pointer;

  /* &:hover {
    div {
      transform: translateZ(100px) rotateX(180deg);
    }
    > div > h4 {
      opacity: 0;
    }
    > span {
      visibility: visible;
      opacity: 1;
    }
    > div:first-child {
      background-color: transparent !important;
      & > h4 {
        color: #323232;
      }
    }
  } */

  > span {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    bottom: 10px;
    left: 35px;
    width: 80px;
    font-size: 13px;
    color: #000;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.8);
    padding: 5px 0;
    z-index: 1000;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
    transition: visibility 0s linear 0.3s, opacity 1s linear 0.3s;
  }

  > span::after {
    position: absolute;
    top: -5px;
    left: 35px;
    content: " ";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
  }

  &.link {
    & > div:first-child {
      background-color: #323232;
      border: 1px solid #323232;
      box-sizing: border-box;
      transition: background-color 0.5s;
    }
    & h4 {
      color: #efefef;
      transition: color 0.5s;
    }
  }
`;

const Faces = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  transform: rotate(90deg);
  transform-style: preserver-3d;
  -webkit-transform-style: preserver-3d;
  -moz-transform-style: preserver-3d;
  transition: transform 1s, background-color 0s 0.3s;

  h4 {
    -webkit-filter: grayscale(100%) saturate(0);
    filter: grayscale(100%) saturate(0);
    opacity: 1;
    color: ${({ theme }) => theme.colors.primaryColor};

    > svg {
      font-size: 3.8rem;
    }
  }
`;

const BoxFace = styled(Faces)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondaryColor};

  h4 {
    line-height: 100px;
    text-align: center;
    font-size: 40px;
    color: #bababa;
    -webkit-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    transform: rotate(-135deg);
    transition: opacity 0s linear 0.3s;
  }
`;

const BoxBack = styled(Faces)`
  z-index: -1;
  background-image: linear-gradient(#fff, #efefef);
  h4 {
    line-height: 100px;
    text-align: center;
    font-size: 12px;
    color: #636363;
    -webkit-transform: rotate(-135deg);
    -ms-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    transform: rotate(-135deg) rotateY(180deg);
    transition: opacity 0s linear 0.3s;
  }
`;
