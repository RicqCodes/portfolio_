import React from "react";
import { Metadata } from "next";
import About from "../components/pages/about";

export const metadata: Metadata = {
  title: "Prince Nwakanma | About me",
  description:
    "A full-stack developer portfolio built with Next.js, Ts and styled-component",
  keywords:
    "web development, web design, react, javascript, nextjs, typescript, solidity, node.js, html, css, styled-components",
};

const AboutPage = () => {
  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
