import Article from "@/app/components/pages/articles/article";
import { Metadata, ResolvingMetadata } from "next";
import { Fragment } from "react";
import { fetchPostBySlug } from "@/lib/blog-api";
import type { BlogPostDetail } from "@/app/types/blog";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const result = (await getData(params.slug, false)) as BlogPostDetail;
  const summary =
    result.contentBlocks?.find((block) => block.type === "text")?.content ??
    result.title;

  return {
    title: result.title,
    description: summary,
    keywords: result.tags?.map((tag) => tag.name).join(", "),
    authors: [{ name: "Ricqcodes", url: "https://github.com/ricqcodes" }],
    publisher: "Ricqcodes",
    openGraph: {
      title: result.title,
      description: summary,
      type: "article",
      url: `https://ricqcodes.dev/blog/${params.slug}`,
      images: [result.coverImage],
      siteName: "Ricqcodes",
      locale: "en_US",
    },
  };
}

async function getData(params: string, incrementViews = true) {
  return fetchPostBySlug(params, incrementViews);
}

const ArticleSinglePage = async ({ params }: { params: { slug: string } }) => {
  const result = await getData(params.slug, true);
  return <Fragment>{<Article post={result} />}</Fragment>;
};

export default ArticleSinglePage;
