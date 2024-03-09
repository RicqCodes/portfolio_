"use client";
import { useSearchParams } from "next/navigation";
import { styled } from "styled-components";
import PageContainer from "../_molecules/PageContainer";
import ContentCard from "../_molecules/ContentCard";
import CardContent from "./_molecules/CardContent";
import Category from "./_molecules/Category";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Iprops {
  tags: { id: number; name: string }[];
  allPost: any[];
  params?: string;
}

const Articles = ({ tags, allPost, params }: Iprops) => {
  const [allPosts, setAllPosts] = useState(allPost);
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  useEffect(() => {
    const controller = new AbortController();
    console.log(tag);
    const fetchBlogPosts = async () => {
      const signal = controller.signal;

      try {
        const response = await fetch(
          `https://api.ricqcodes.dev/api/posts/byTag/${tag}`,
          { signal }
        );
        const data = await response.json();
        setAllPosts(data);
      } catch (error: any) {
        console.log(error);
        if (error.name === "AbortError") {
          // Request was cancelled
        } else {
          // Handle other errors
        }
      }
    };

    tag && fetchBlogPosts();

    return () => controller.abort();
  }, [tag]);

  return (
    <PageContainer>
      <InnerContainer>
        <InnerContent>
          <Section>
            {params && (
              <h3>{`${params} tag with (${allPosts.length}) articles`}</h3>
            )}
            <SectionBlog>
              {allPosts
                .sort((a, b) => {
                  const createdAtA = new Date(a.createdAt).getTime();
                  const createdAtB = new Date(b.createdAt).getTime();
                  return createdAtB - createdAtA;
                })
                .map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <ContentCard
                      fullWidth
                      ExtraComp={
                        <CardContent
                          title={post.title}
                          description={post?.description}
                          readTime={post.readTime}
                          tags={post.tags}
                          createdAt={post.createdAt}
                        />
                      }
                    />
                  </Link>
                ))}
            </SectionBlog>
          </Section>
          <AsideSection>
            <Aside>
              <h2>Tags</h2>
              <Categories>
                {tags.map((tag) => (
                  <Link key={tag.id} href={`/blog?tag=${tag.name}`}>
                    <Category title={tag.name} />
                  </Link>
                ))}
              </Categories>
            </Aside>
          </AsideSection>
        </InnerContent>
      </InnerContainer>
    </PageContainer>
  );
};

export default Articles;

const InnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2.4rem;
  display: flex;
  padding-bottom: 10rem;

  @media (max-width: 1100px) {
    height: auto;
  }
`;

const InnerContent = styled.main`
  width: 100%;
  padding: 0 6rem;
  display: grid;
  grid-template-columns: minmax(78rem, 1fr) 1fr;
  column-gap: 3rem;
  grid-template-areas: "post side";

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  @media (max-width: 725px) {
    padding: 0;
  }
`;

const Section = styled.section`
  overflow: auto;
  grid-area: post / post / post / post;

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`;

const SectionBlog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
`;

const AsideSection = styled.section`
  grid-area: side / side / side / side;
`;

const Aside = styled.aside`
  width: 100%;
  position: sticky;
  top: 16rem;

  h2 {
    font-size: 2.8rem;
    font-weight: 600;
  }
`;

const Categories = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;
