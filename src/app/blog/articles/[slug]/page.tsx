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

const ArticleSinglePage = async ({ params }: { params: { slug: string } }) => {
  let res = await fetch(`http://localhost:8000/api/posts/${params.slug}`, {
    next: { revalidate: 36000 },
  });
  res = await res.json();

  return <Fragment>{<Article post={res} />}</Fragment>;
};

export default ArticleSinglePage;
