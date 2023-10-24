import Article from "@/app/components/pages/articles/article";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Personal Blog",
  description:
    "A personal blog for a full-stack developer portfolio built with Next.js, Ts and styled-component",
  keywords:
    "web development, web design, blog, technical writer, react, javascript, nextjs, typescript, solidity, node.js, html, css, styled-components",
};

async function getData(params: string) {
  let res = await fetch(`https://api.ricqcodes.dev/api/posts/${params}`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  res = await res.json();

  return res;
}

const ArticleSinglePage = async ({ params }: { params: { slug: string } }) => {
  const result = await getData(params.slug);
  return <Fragment>{<Article post={result} />}</Fragment>;
};

export default ArticleSinglePage;
