import Article from "@/app/components/pages/articles/article";
import { Metadata, ResolvingMetadata } from "next";
import { Fragment } from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

interface ResultType extends Response {
  title: string;
  contentBlocks: any[];
  tags: { name: string }[];
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id.split("/")[2];

  // fetch data
  const result = (await getData(id)) as ResultType;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: result.title,
    description: result.contentBlocks[1].content,
    keywords: Object.values(result.tags).join(","),
    authors: [{ name: "Ricqcodes", url: "https://github.com/ricqcodes" }],
    publisher: "Ricqcodes",

    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
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
