import React, { useState } from "react";
import { styled } from "styled-components";
import { BiLinkAlt } from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";

const CardDetails = ({
  tag,
  buildTools,
  name,
  description,
  repo,
  url,
}: {
  tag: string;
  buildTools: string[];
  name: string;
  description: string;
  repo: string;
  url: string;
}) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <CardContainer>
      <InnerContainer>
        <Heading>
          <Top>
            <h4>{tag}</h4>
            <div>
              {buildTools.map((tool, i) => (
                <p key={i}>{tool}</p>
              ))}
            </div>
          </Top>
          <h2>{name}</h2>
        </Heading>
        <Content>
          <p>
            {seeMore ? description : description.slice(0, 128) + "..."}
            {!seeMore && (
              <span onClick={() => setSeeMore(true)}> See More &rarr;</span>
            )}
            {seeMore && (
              <span onClick={() => setSeeMore(false)}> See Less &rarr;</span>
            )}
          </p>
          <div>
            <a href={url} target="_blank" rel="noreferrer">
              <BiLinkAlt />
            </a>
            <a href={repo} target="_blank" rel="noreferrer">
              <RxGithubLogo />
            </a>
          </div>
        </Content>
      </InnerContainer>
    </CardContainer>
  );
};

export default CardDetails;

const CardContainer = styled.div`
  width: 100%;
  padding: 1.8rem 0;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  h2 {
    font-size: 2.2rem;
    font-weight: 600;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  h4 {
    font-size: 1.7rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  > div {
    display: flex;
    gap: 1.4rem;
    /* align-items: center;
    */
    justify-content: end;
    flex-wrap: wrap;
    align-items: end;

    p {
      padding: 2px 14px;
      font-size: 1rem;
      border-radius: 8px;
      background-color: black;
      color: #fff;
      text-transform: capitalize;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  p {
    font-size: 1.4rem;

    span {
      font-weight: 600;
      margin-left: 1rem;
      cursor: pointer;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    font-size: 3rem;

    svg {
      cursor: pointer;
    }
  }
`;
