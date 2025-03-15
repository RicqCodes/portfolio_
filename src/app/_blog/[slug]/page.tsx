import Article from "@/app/components/pages/articles/article";
import { Metadata, ResolvingMetadata } from "next";
import { Fragment } from "react";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

interface ResultType extends Response {
  title: string;
  contentBlocks: any[];
  cover_image: string;
  tags: { name: string }[];
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const result = (await getData(params.slug)) as ResultType;

  return {
    title: result.title,
    description: result.contentBlocks[1].content,
    keywords: Object.values(result.tags).join(","),
    authors: [{ name: "Ricqcodes", url: "https://github.com/ricqcodes" }],
    publisher: "Ricqcodes",
    openGraph: {
      title: result.title,
      description: result.contentBlocks[1].content,
      type: "article",
      url: `https://ricqcodes.dev/blog/${params.slug}`,
      images: [result.cover_image],
      siteName: "Ricqcodes",
      locale: "en_US",
    },
  };
}

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
