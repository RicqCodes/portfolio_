import React from "react";
import Projects from "../components/pages/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prince Nwakanma | Projects",
  description:
    "A full-stack developer portfolio built with Next.js, Ts and styled-component",
  keywords:
    "web development, web design, react, javascript, nextjs, typescript, solidity, node.js, html, css, styled-components",
};
const ProjectsPage = () => {
  return (
    <>
      <Projects />
    </>
  );
};

export default ProjectsPage;
