"use client";
import { useSearchParams } from "next/navigation";
import { styled } from "styled-components";
import PageContainer from "../_molecules/PageContainer";
import ContentCard from "../_molecules/ContentCard";
import CardContent from "./_molecules/CardContent";
import Category from "./_molecules/Category";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { BlogPostSummary, Tag } from "@/app/types/blog";
import { fetchPostsByTag } from "@/lib/blog-api";

interface Iprops {
  tags: Tag[];
  allPost: BlogPostSummary[];
  params?: string;
}

const Articles = ({ tags, allPost, params }: Iprops) => {
  const [allPosts, setAllPosts] = useState(allPost);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  useEffect(() => {
    const controller = new AbortController();
    const fetchBlogPosts = async () => {
      const signal = controller.signal;

      try {
        if (!tag) return;
        setIsLoading(true);
        const data = await fetchPostsByTag(tag, signal);
        setAllPosts(data);
      } catch (error: any) {
        console.log(error);
        if (error.name === "AbortError") {
          // Request was cancelled
        } else {
          // Handle other errors
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (tag) {
      fetchBlogPosts();
    } else {
      setAllPosts(allPost);
    }

    return () => controller.abort();
  }, [tag, allPost]);

  return (
    <PageContainer>
      <InnerContainer>
        <InnerContent>
          <Section>
            {params && (
              <h3>{`${params} tag with (${allPosts.length}) articles`}</h3>
            )}
            <SectionBlog>
              {isLoading ? (
                <LoadingSkeleton>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <SkeletonCard key={`skeleton-${index}`}>
                      <SkeletonImage />
                      <SkeletonLine />
                      <SkeletonLine $short />
                      <SkeletonRow>
                        <SkeletonChip />
                        <SkeletonChip />
                        <SkeletonChip />
                      </SkeletonRow>
                    </SkeletonCard>
                  ))}
                </LoadingSkeleton>
              ) : allPosts.length === 0 ? (
                <EmptyState>
                  <h4>No posts yet.</h4>
                  <p>Check back soon for new writing.</p>
                </EmptyState>
              ) : (
                allPosts
                  .sort((a, b) => {
                    const createdAtA = new Date(a.createdAt).getTime();
                    const createdAtB = new Date(b.createdAt).getTime();
                    return createdAtB - createdAtA;
                  })
                  .map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <ContentCard
                        fullWidth
                        img={post.coverImage}
                        alt={post.title}
                        ExtraComp={
                          <CardContent
                            title={post.title}
                            readTime={post.readTime}
                            tags={post.tags}
                            createdAt={post.createdAt}
                          />
                        }
                      />
                    </Link>
                  ))
              )}
            </SectionBlog>
          </Section>
          <AsideSection>
            <Aside>
              <h2>Tags</h2>
              <Categories>
                {tags.map((tag) => (
                  <Link key={tag.name} href={`/blog?tag=${tag.name}`}>
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

const LoadingSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
`;

const SkeletonCard = styled.div`
  border-radius: 3rem;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
  position: relative;
  overflow: hidden;

  display: grid;
  gap: 1.6rem;

  &::before {
    content: "";
    position: absolute;
    top: 0.6rem;
    right: 1rem;
    width: 98%;
    height: 98%;
    border: 1px solid ${({ theme }) => theme.colors.tertiaryColor};
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 2rem;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      transparent 0%,
      rgba(255, 255, 255, 0.55) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    animation: shimmer 1.6s ease-in-out infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

const SkeletonLine = styled.div<{ $short?: boolean }>`
  height: 1.4rem;
  width: ${({ $short }) => ($short ? "60%" : "85%")};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 999px;
  opacity: 0.7;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 22rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  opacity: 0.6;
`;

const SkeletonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkeletonChip = styled.div`
  height: 2.4rem;
  width: 6.2rem;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  opacity: 0.7;
`;

const EmptyState = styled.div`
  padding: 4.8rem 3.2rem;
  border-radius: 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.tertiaryColor};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;

  h4 {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    margin-top: 0.8rem;
    font-size: 1.4rem;
    opacity: 0.7;
  }
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
