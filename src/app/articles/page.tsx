import { Metadata } from "next";
import React from "react";
import Articles from "../components/pages/articles";

export const metadata: Metadata = {
  title: "Personal Blog",
  description:
    "A personal blog for a full-stack developer portfolio built with Next.js, Ts and styled-component",
  keywords:
    "web development, web design, blog, technical writer, react, javascript, nextjs, typescript, solidity, node.js, html, css, styled-components",
};

const ArticlePage = () => {
  return (
    <div>
      <Articles />
    </div>
  );
};

export default ArticlePage;
