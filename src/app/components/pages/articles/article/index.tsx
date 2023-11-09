"use client";
import { styled } from "styled-components";
import PageContainer from "../../_molecules/PageContainer";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";

import { FiShare2, FiEye } from "react-icons/fi";
import { formatDate } from "@/helper";
import React from "react";
import ShareSocial from "@/app/components/Common/Share";
import useToggle from "@/hooks/useToggle";

const AceEditor = dynamic(
  async () => {
    const ace = await import("react-ace");
    await import("ace-builds/src-noconflict/ace");
    await import("ace-builds/src-noconflict/mode-javascript");
    await import("ace-builds/src-noconflict/mode-typescript");
    await import("ace-builds/src-noconflict/mode-powershell");
    await import("ace-builds/src-noconflict/mode-graphqlschema");
    await import("ace-builds/src-noconflict/mode-rust");
    await import("ace-builds/src-noconflict/mode-python");
    await import("ace-builds/src-noconflict/mode-php");
    await import("ace-builds/src-noconflict/mode-php_laravel_blade");
    await import("ace-builds/src-noconflict/theme-cobalt");
    await import("ace-builds/src-noconflict/ext-language_tools");
    return ace.default;
  },
  { ssr: false }
);

type postData = {
  id: number;
  createdAt: number;
  updatedAt: string;
  title: string;
  slug: string;
  cover_image: string;
  views: number;
  tags: { id: number; name: string }[];
};

interface Iprops {
  post: postData;
}

const Article = ({ post }: any) => {
  const dateParsed = formatDate(post.createdAt);

  const {
    handleToggle,
    toggle,
    toggledElementRef,
    toggleRef,
    buttonToggleRef,
  } = useToggle({
    eventType: "click",
  });

  function replaceBackticks(match: string) {
    return match.replace(/`([^`]+)`/g, (match: any, code: string) => {
      return `<code>${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>`;
    });
  }

  return (
    <React.Fragment>
      <PageContainer>
        <InnerContainer style={{ filter: `blur(${toggle ? "1rem" : "0rem"})` }}>
          <InnerContent>
            <Section>
              <Heading>
                <h1>{post.title}</h1>
                <SmallAction>
                  <p>{dateParsed}</p>
                  <p>{post.readTime} min read</p>
                  <p>
                    <FiEye />
                    {post.views}
                  </p>
                  <button ref={buttonToggleRef} onClick={() => handleToggle()}>
                    <FiShare2 />
                  </button>
                </SmallAction>
                <CoverPhoto>
                  <Image
                    src={post.cover_image}
                    alt="Picture of the author"
                    width={700}
                    height={500}
                    blurDataURL={post.cover_image}
                  />
                </CoverPhoto>
              </Heading>
              <Body>
                {post.contentBlocks.map((p: any, index: number) => {
                  switch (p.type) {
                    case "heading":
                      const parsedTitle = JSON.parse(p.title);
                      switch (parsedTitle.type) {
                        case "p":
                          return (
                            <ParagraphHeading key={index}>
                              {parsedTitle.text}
                            </ParagraphHeading>
                          );
                        case "h1":
                          return <h1 key={index}>{parsedTitle.text}</h1>;
                        case "h2":
                          return <h2 key={index}>{parsedTitle.text}</h2>;
                        case "h3":
                          return <h3 key={index}>{parsedTitle.text}</h3>;
                        case "h4":
                          return <h4 key={index}>{parsedTitle.text}</h4>;
                        case "h5":
                          return <h5 key={index}>{parsedTitle.text}</h5>;
                        case "h6":
                          return <h6 key={index}>{parsedTitle.text}</h6>;
                        default:
                          // Handle unsupported title types
                          return "";
                      }
                    case "text":
                      // Replace text wrapped in double backticks with <code> elements
                      let content = p.content.replace(
                        /`(.*?)`/g,
                        (match: any, code: any) => {
                          return `<code>${code}</code>`;
                        }
                      );
                      // Replace links in text with anchor tags
                      if (p.links && p.links.length > 0) {
                        p.links.forEach((link: any) => {
                          // Use a regular expression to find and replace the link text with an anchor tag
                          const regex = new RegExp(link.text, "g");
                          content = content.replace(
                            regex,
                            `<a href="${link.url}" target="_blank">${link.text}</a>`
                          );
                        });
                      }

                      // Render the modified text with code formatting and links
                      return (
                        <p
                          key={index}
                          dangerouslySetInnerHTML={{ __html: content }}
                        ></p>
                      );

                    case "list":
                      if (
                        p.list.type === "unordered" ||
                        p.list.type === "ordered"
                      ) {
                        const Type = p.list.type === "unordered" ? "ul" : "ol";
                        return (
                          <Type key={index}>
                            {p.list.content.map(
                              (content: string, i: number) => {
                                // let replacedContent = content.replace(
                                //   /`([^`]+)`/g,
                                //   (match: string, code: string) => {
                                //     return `<code>${code}</code>`;
                                //   }
                                // );

                                // replacedContent = replacedContent.replace(
                                //   /<code>(.*?)<\/code>/g,
                                //   function (match, group) {
                                //     return (
                                //       "<code>" +
                                //       group
                                //         .replace(/</g, "&lt;")
                                //         .replace(/>/g, "&gt;") +
                                //       "</code>"
                                //     );
                                //   }
                                // );

                                // let replacedContent = content.replace(
                                //   /`([^`]+)`/g,
                                //   (match, code) => {
                                //     return `<code>${code
                                //       .replace(/</g, "&lt;")
                                //       .replace(/>/g, "&gt;")}</code>`;
                                //   }
                                // );

                                let replacedContent = content.replace(
                                  /(\([^`]+`\s?[^`]+\)|`[^`]+`)/g,
                                  replaceBackticks
                                );

                                // console.log(replacedContent);
                                // Check if there are links
                                if (p.links && p.links.length > 0) {
                                  // Iterate through each link and replace if found in the content
                                  p.links.forEach((link: any) => {
                                    const linkPattern = new RegExp(
                                      link.text,
                                      "g"
                                    );
                                    replacedContent = replacedContent.replace(
                                      linkPattern,
                                      `<a href="${link.url}">${link.text}</a>`
                                    );
                                  });
                                }

                                return (
                                  <li key={i}>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: replacedContent,
                                      }}
                                    />
                                  </li>
                                );
                              }
                            )}
                          </Type>
                        );
                      }
                    case "image":
                      return (
                        <CoverPhoto>
                          <Image
                            sizes="100vw"
                            style={{
                              width: "80%",
                              height: "auto",
                            }}
                            width={500}
                            height={300}
                            src={p.imageUrl}
                            alt={p.content}
                          />
                        </CoverPhoto>
                      );

                    case "code":
                      return (
                        <AceEditor
                          key={index}
                          mode={
                            p.codeType === "shell" ? "powershell" : p.codeType
                          }
                          theme="cobalt"
                          value={p.content}
                          name={`${p.id}`}
                          editorProps={{ $blockScrolling: true }}
                          fontSize={14}
                          height="28rem"
                          enableSnippets
                          showPrintMargin={false}
                          highlightActiveLine={false}
                          style={{
                            width: "100%",
                            backdropFilter: "blur(20px)",
                          }}
                          setOptions={{
                            readOnly: true,
                            tabSize: 1,
                            useWorker: false,
                          }}
                        />
                      );
                  }
                })}
              </Body>
            </Section>
          </InnerContent>
        </InnerContainer>
      </PageContainer>
      {toggle && (
        <div ref={toggledElementRef} onClick={() => handleToggle()}>
          <ShareSocial
            socialTypes={[
              "facebook",
              "twitter",
              "whatsapp",
              "linkedin",
              "telegram",
            ]}
            url={`https://ricqcodes.dev/blog/${post.slug}`}
            onSocialButtonClicked={(buttonName: string) => {
              console.log(`${buttonName} clicked`);
            }}
            title={`I just read this blog post titled: ${post.title}, i think you should check it out`}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default Article;

const InnerContainer = styled.div`
  width: 100%;
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
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6.4rem;
  overflow: auto;
  grid-area: post / post / post / post;
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;

  h1 {
    font-size: 3.4rem;
    font-weight: 600;
    text-align: start;
    text-align: center;
  }

  @media (max-width: 324px) {
    & h1 {
      font-size: 2.8rem;
    }
  }
`;

const SmallAction = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1.8rem;

  > button {
    background-color: transparent;
  }

  > p,
  > button {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.variantColor};
    height: 2rem;
    padding: 0 1.4rem;
    &:not(:last-child) {
      border-right: 2px solid ${({ theme }) => theme.colors.variantColor};
    }

    > svg {
      font-size: 1.8rem;
    }
  }
`;

const ParagraphHeading = styled.p`
  font-size: 2rem !important;
  font-weight: 600;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }

  > p {
    font-size: 1.6rem;

    a {
      text-decoration: underline;
    }
  }

  > p,
  ol,
  ul {
    code {
      padding: 0.8rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.tertiaryColor};
    }
  }

  > h1 {
    font-size: 3rem;
  }

  > h2 {
    font-size: 2.8rem;
  }

  > ul,
  ol {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    li {
      font-size: 1.6rem;
      display: list-item;
      list-style-position: inside;

      a {
        text-decoration: underline;
      }
    }
  }

  > ul {
    list-style-type: disc;
  }

  > ol {
    list-style-type: decimal;
  }

  @media (max-width: 324px) {
    & h1 {
      font-size: 2.8rem;
    }
  }
`;

const CoverPhoto = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    /* height: 45rem;
    width: 45rem; */

    @media (max-width: 580px) {
      height: 32rem;
      width: 32rem;
    }
  }
`;
