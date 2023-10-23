import { Metadata } from "next";
import Articles from "../components/pages/articles";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Personal Blog",
  description:
    "A personal blog for a full-stack developer portfolio built with Next.js, Ts and styled-component",
  keywords:
    "web development, web design, blog, technical writer, react, javascript, nextjs, typescript, solidity, node.js, html, css, styled-components",
};

async function getData() {
  const getAllPosts = await fetch("http://localhost:8000/api/posts");
  const getAllTags = await fetch("http://localhost:8000/api/tags");

  if (!getAllPosts.ok || !getAllTags.ok) {
    throw new Error("Failed to fetch all articles");
  }

  const results = await Promise.all([getAllPosts.json(), getAllTags.json()]);

  if (!results) {
    throw new Error("Failed to fetch all articles");
  }

  return results;
}

const ArticlePage = async () => {
  const results = await getData();

  return (
    <Fragment>{<Articles allPost={results[0]} tags={results[1]} />}</Fragment>
  );
};

export default ArticlePage;
