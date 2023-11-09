"use client";
import { IndexPropsType } from "@/app/types";
import React from "react";
import { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LinkedinShareButton,
} from "react-share";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import { styled } from "styled-components";

const components: any = {
  facebook: {
    Button: FacebookShareButton,
    Icon: FaFacebook,
  },
  twitter: {
    Button: TwitterShareButton,
    Icon: FaTwitter,
  },
  whatsapp: {
    Button: WhatsappShareButton,
    Icon: FaWhatsapp,
  },
  linkedin: {
    Button: LinkedinShareButton,
    Icon: FaLinkedin,
  },
  telegram: {
    Button: TelegramShareButton,
    Icon: FaTelegram,
  },
};

const ShareSocial = (props: IndexPropsType) => {
  const [isCopied, setIsCopied] = useState(false);
  const {
    title,
    socialTypes = ["facebook", "twitter"],
    url,
    onSocialButtonClicked = () => {},
  } = props;

  const copyToClipboard = (text: string) => {
    if (navigator && navigator.clipboard)
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setIsCopied(true);
        })
        .catch((error) => {
          alert(`Copy failed! ${error}`);
        });
  };

  const getComponent = (type: string) => {
    const { Button, Icon } = components[type];
    return (
      <Tooltip>
        <Button
          url={url}
          quote={title}
          title={title}
          onClick={() => onSocialButtonClicked(type)}
        >
          <Icon />
        </Button>
      </Tooltip>
    );
  };

  return (
    <ShareContainer>
      <InnerContainer onClick={(e) => e.stopPropagation()}>
        <Title data-testid="title">Share this blog posts</Title>
        <IconContainer>
          {Array.isArray(socialTypes) &&
            socialTypes.map((type, id) => (
              <React.Fragment key={"social_item_" + id}>
                {getComponent(type)}
              </React.Fragment>
            ))}
        </IconContainer>
        <CopyContainer>
          <CopyUrl>{url}</CopyUrl>
          <CopyIcon data-testid="copy-btn" onClick={() => copyToClipboard(url)}>
            {isCopied ? "Copied" : "Copy"}
          </CopyIcon>
        </CopyContainer>
      </InnerContainer>
    </ShareContainer>
  );
};

export default ShareSocial;

const ShareContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.4);
`;

const InnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 8px;
  z-index: 999;
  /* background: white; */
  background: ${({ theme }) => theme.colors.primaryColor};
  color: #000;
  transform: translate(-50%, -50%);
  max-width: 80rem;
  width: 100%;
  height: auto;
  padding: 3rem;
  outline: none;
  min-width: 25rem;
`;

const Title = styled.h1`
  text-align: left;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.4rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  text-align: left;

  & button {
    flex: 1 1 auto;
    border: none;
    text-align: center;
    margin: 5px;
  }
`;

const CopyContainer = styled.div`
  position: relative;
  padding: 14px;
  border: 1px solid grey;
  color: #263238;
  cursor: text;
  display: inline-flex;
  font-size: 1.4rem;
  box-sizing: border-box;
  align-items: center;
  font-family: "Helvetica", "Arial", sans-serif;
  letter-spacing: -0.05px;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  background: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 4px;
`;
const CopyUrl = styled.div`
  color: white;
  max-width: calc(100% - 55px);
  overflow-x: auto;
  font-size: 1.6rem;
  line-height: 2.4rem;
  white-space: nowrap;
  font-family: "monospace", "Helvetica", "Arial", sans-serif;
`;

const CopyIcon = styled.div`
  width: 100%;
  position: absolute;
  left: 93%;
  color: ${({ theme }) => theme.colors.variantColor};
  font-weight: bold;

  & p {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Tooltip = styled.div`
  > button {
    > svg {
      font-size: 2.8rem;
      color: ${({ theme }) => theme.colors.variantColor};
    }
  }
`;
