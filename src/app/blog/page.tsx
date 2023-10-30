import { Metadata } from "next";
import Articles from "../components/pages/articles";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Personal Blog",
  description:
    "A personal blog that outlines my journey as a full-stack developer curated with my experiences and what i have learnt built with Next.js and Nest.js",
  keywords:
    "web development, web design, blog, technical writer, react, javascript, nextjs, typescript, solidity, node.js, html, css, nest.js, technical, styled-components",
};

async function getData() {
  const getAllPosts = await fetch("https://api.ricqcodes.dev/api/posts", {
    next: { revalidate: 36000 },
  });
  const getAllTags = await fetch("https://api.ricqcodes.dev/api/tags", {
    next: { revalidate: 36000 },
  });

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
