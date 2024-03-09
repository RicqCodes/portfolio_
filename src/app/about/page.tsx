import React from "react";
import { Metadata } from "next";
import About from "../components/pages/about";

export const metadata: Metadata = {
  title: "Prince Nwakanma | About me",
  description:
  "A full-stack developer with 4+ years of experience building web2 & web3 applications",
  keywords:
    "web development, web design, react, javascript, nextjs, typescript, solidity, node.js, html, css, styled-components",
  openGraph: {
    title: "Prince Nwakanma | About me",
    description:
      "A full-stack developer with 4+ years of experience building web2 & web3 applications",
    type: "website",
    url: "https://ricqcodes.dev/about",
    images: ["@/images/prince.png"],
    siteName: "Prince Nwakanma",
    locale: "en_US",
  },
};

const AboutPage = () => {
  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
