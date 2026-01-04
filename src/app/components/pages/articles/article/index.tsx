"use client";
import { styled } from "styled-components";
import PageContainer from "../../_molecules/PageContainer";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

import { FiShare2, FiEye } from "react-icons/fi";
import { formatDate } from "@/helper";
import ShareSocial from "@/app/components/Common/Share";
import useToggle from "@/hooks/useToggle";
import { formatNumber } from "@/lib/utils";
import type { BlogPostDetail, ContentBlock } from "@/app/types/blog";

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
    await import("ace-builds/src-noconflict/mode-json");
    await import("ace-builds/src-noconflict/mode-java");
    await import("ace-builds/src-noconflict/mode-c_cpp");
    await import("ace-builds/src-noconflict/mode-csharp");
    await import("ace-builds/src-noconflict/mode-html");
    await import("ace-builds/src-noconflict/mode-css");
    await import("ace-builds/src-noconflict/mode-sh");
    await import("ace-builds/src-noconflict/mode-text");
    await import("ace-builds/src-noconflict/theme-cobalt");
    await import("ace-builds/src-noconflict/ext-language_tools");
    return ace.default;
  },
  { ssr: false }
);

interface Iprops {
  post: BlogPostDetail;
}

const sanitizeInlineCode = (value: string) =>
  value.replace(/</g, "&lt;").replace(/>/g, "&gt;");

const replaceBackticks = (match: string) =>
  match.replace(/`([^`]+)`/g, (_match: string, code: string) => {
    return `<code>${sanitizeInlineCode(code)}</code>`;
  });

const renderHeading = (block: ContentBlock, key: number) => {
  const parsedTitle =
    typeof block.title === "string" ? JSON.parse(block.title) : block.title;
  switch (parsedTitle?.type) {
    case "p":
      return (
        <ParagraphHeading key={key}>{parsedTitle?.text}</ParagraphHeading>
      );
    case "h1":
      return <h1 key={key}>{parsedTitle?.text}</h1>;
    case "h2":
      return <h2 key={key}>{parsedTitle?.text}</h2>;
    case "h3":
      return <h3 key={key}>{parsedTitle?.text}</h3>;
    case "h4":
      return <h4 key={key}>{parsedTitle?.text}</h4>;
    case "h5":
      return <h5 key={key}>{parsedTitle?.text}</h5>;
    case "h6":
      return <h6 key={key}>{parsedTitle?.text}</h6>;
    default:
      return null;
  }
};

const renderText = (block: ContentBlock, key: number) => {
  let content = block.content
    ? block.content.replace(/`(.*?)`/g, (_match, code) => {
        return `<code>${sanitizeInlineCode(code)}</code>`;
      })
    : "";

  if (block.links && block.links.length > 0 && content) {
    block.links.forEach((link) => {
      const regex = new RegExp(link.text, "g");
      content = content.replace(
        regex,
        `<a href="${link.url}" target="_blank">${link.text}</a>`
      );
    });
  }

  return (
    <p key={key} dangerouslySetInnerHTML={{ __html: content || "" }}></p>
  );
};

const renderList = (block: ContentBlock, key: number) => {
  if (!block.list) return null;
  const Type = block.list.type === "unordered" ? "ul" : "ol";

  return (
    <Type key={key}>
      {block.list.content.map((content: string, index: number) => {
        let replacedContent = content.replace(
          /(\([^`]+`\s?[^`]+\)|`[^`]+`)/g,
          replaceBackticks
        );

        if (block.links && block.links.length > 0) {
          block.links.forEach((link) => {
            const linkPattern = new RegExp(link.text, "g");
            replacedContent = replacedContent.replace(
              linkPattern,
              `<a href="${link.url}">${link.text}</a>`
            );
          });
        }

        return (
          <li key={index}>
            <span
              dangerouslySetInnerHTML={{
                __html: replacedContent,
              }}
            />
          </li>
        );
      })}
    </Type>
  );
};

const renderImage = (block: ContentBlock, key: number) => {
  if (!block.imageUrl) return null;
  return (
    <CoverPhoto key={key}>
      <Image
        sizes="100vw"
        style={{
          width: "80%",
          height: "auto",
        }}
        width={500}
        height={300}
        src={block.imageUrl}
        alt={block.content || "Article image"}
      />
    </CoverPhoto>
  );
};

const renderDivider = (key: number) => <Divider key={key} />;

const renderCode = (block: ContentBlock, key: number) => {
  if (!block.content) return null;
  const modeMap: Record<string, string> = {
    shell: "sh",
    bash: "sh",
    cpp: "c_cpp",
    csharp: "csharp",
  };
  const mode = modeMap[block.codeType || ""] || block.codeType || "text";
  return (
    <AceEditor
      key={key}
      mode={mode}
      theme="cobalt"
      value={block.content}
      name={`${block.order ?? key}`}
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
};

const ArticleHeader = ({
  post,
  dateParsed,
  onShare,
  shareButtonRef,
}: {
  post: BlogPostDetail;
  dateParsed: string;
  onShare: () => void;
  shareButtonRef: React.LegacyRef<HTMLButtonElement>;
}) => (
  <Heading>
    <h1>{post.title}</h1>
    <SmallAction>
      <p>{dateParsed}</p>
      <p>{post.readTime} min read</p>
      <p>
        <FiEye />
        {formatNumber(post.views)}
      </p>
      <button ref={shareButtonRef} onClick={onShare}>
        <FiShare2 />
      </button>
    </SmallAction>
    <CoverPhoto>
      <Image
        src={post.coverImage}
        alt="Article cover"
        width={700}
        height={500}
        blurDataURL={post.coverImage}
      />
    </CoverPhoto>
  </Heading>
);

const ArticleBody = ({ blocks }: { blocks: ContentBlock[] }) => (
  <Body>
    {blocks.map((block, index) => {
      switch (block.type) {
        case "heading":
          return renderHeading(block, index);
        case "text":
          return renderText(block, index);
        case "list":
          return renderList(block, index);
        case "image":
          return renderImage(block, index);
        case "code":
          return renderCode(block, index);
        case "divider":
          return renderDivider(index);
        default:
          return null;
      }
    })}
  </Body>
);

const Article = ({ post }: Iprops) => {
  const dateParsed = formatDate(post.createdAt);
  const orderedBlocks = [...(post.contentBlocks ?? [])].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );

  const { handleToggle, toggle, toggledElementRef, buttonToggleRef } = useToggle(
    {
      eventType: "click",
    }
  );

  return (
    <React.Fragment>
      <PageContainer>
        <InnerContainer style={{ filter: `blur(${toggle ? "1rem" : "0rem"})` }}>
          <InnerContent>
            <Section>
              <ArticleHeader
                post={post}
                dateParsed={dateParsed}
                onShare={handleToggle}
                shareButtonRef={buttonToggleRef}
              />
              {orderedBlocks.length === 0 ? (
                <EmptyState>
                  <h4>Content coming soon.</h4>
                  <p>This article is still being prepared.</p>
                </EmptyState>
              ) : (
                <ArticleBody blocks={orderedBlocks} />
              )}
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
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    @media (max-width: 580px) {
      height: 32rem;
      width: 32rem;
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiaryColor};
  opacity: 0.6;
`;

const EmptyState = styled.div`
  padding: 4.8rem 3.2rem;
  border-radius: 2.4rem;
  border: 1px dashed ${({ theme }) => theme.colors.tertiaryColor};
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
