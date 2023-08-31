"use client";
import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

const LoadingComponent = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};

export default LoadingComponent;

const LoadingContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 100%;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  /* background-color: ${({ theme }) => theme.colors.secondaryColor}; */
  z-index: 30;
`;
