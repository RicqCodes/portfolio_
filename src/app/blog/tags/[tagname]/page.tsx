import Articles from "@/app/components/pages/articles";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Personal Blog",
  description:
    "A personal blog for a full-stack developer portfolio built with Next.js, Ts and styled-component",
  keywords:
    "web development, web design, blog, technical writer, react, javascript, nextjs, typescript, solidity, node.js, html, css, styled-components",
};

const TagPage = async ({ params }: { params: { tagname: string } }) => {
  const getAllPosts = await fetch(
    `http://localhost:8000/api/posts/byTag/${params.tagname}`
  );
  const getAllTags = await fetch("http://localhost:8000/api/tags");

  const results = await Promise.all([getAllPosts.json(), getAllTags.json()]);

  return (
    <>
      <Articles
        allPost={results[0]}
        tags={results[1]}
        params={params.tagname}
      />
    </>
  );
};

export default TagPage;
