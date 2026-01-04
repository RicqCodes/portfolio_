import { Metadata } from "next";
import Articles from "../components/pages/articles";
import { Fragment } from "react";
import { fetchPosts, fetchTags } from "@/lib/blog-api";
import type { BlogPostSummary, Tag } from "@/app/types/blog";

export const metadata: Metadata = {
  title: "Personal Blog",
  description:
    "A personal blog that outlines my journey as a full-stack developer curated with my experiences and what i have learnt. Built with Next.js and Nest.js",
  keywords:
    "web development, web design, blog, technical writer, react, javascript, nextjs, typescript, solidity, node.js, html, css, nest.js, technical, styled-components",
};

async function getData(): Promise<{ posts: BlogPostSummary[]; tags: Tag[] }> {
  const [postsPayload, tags] = await Promise.all([
    fetchPosts(),
    fetchTags(),
  ]);

  return {
    posts: postsPayload.items ?? [],
    tags,
  };
}

const ArticlePage = async () => {
  const results = await getData();

  return (
    <Fragment>{<Articles allPost={results.posts} tags={results.tags} />}</Fragment>
  );
};

export default ArticlePage;
