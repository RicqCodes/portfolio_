"use client";
import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

const LoadingComponent = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};

export default LoadingComponent;

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.primaryColor};
  z-index: 999999;
`;
