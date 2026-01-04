import React from "react";
import { styled } from "styled-components";
import { BiSolidTimeFive, BiSolidCalendar } from "react-icons/bi";
import Category from "./Category";
import { formatDate } from "@/helper";
import type { Tag } from "@/app/types/blog";

interface Iprops {
  createdAt: number | string;
  title: string;
  readTime: number;
  tags: Tag[];
}
const CardContent = ({ createdAt, title, tags, readTime }: Iprops) => {
  const dateParsed = formatDate(createdAt);
  return (
    <ContentContainer>
      <InnerContainer>
        <Metadata>
          <div>
            <BiSolidCalendar />
            {dateParsed}
          </div>
          <div>
            <BiSolidTimeFive />
            {readTime} min read
          </div>
        </Metadata>
        <h2>{title}</h2>
        <Categories>
          {tags?.map((tag) => (
            <Category key={tag.name} title={tag.name} />
          ))}
        </Categories>
      </InnerContainer>
    </ContentContainer>
  );
};

export default CardContent;

const ContentContainer = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  h2 {
    font-weight: 600;
    font-size: 3.2rem;
  }

  @media (max-width: 540px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

const Metadata = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.variantColor};
    opacity: 0.6;

    > svg {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 540px) {
    > div {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 340px) {
    gap: 0.6rem;
  }
`;

const Categories = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
`;
