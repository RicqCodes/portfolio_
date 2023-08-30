import React from "react";
import { css, styled } from "styled-components";

const PageContainer = ({
  children,
  linearBg = false,
  fullHeight = false,
}: {
  children: React.ReactNode;
  linearBg?: boolean;
  fullHeight?: boolean;
}) => {
  return (
    <SectionContainer $linearBg={linearBg} $fullHeight={fullHeight}>
      {children}
    </SectionContainer>
  );
};

export default PageContainer;

const SectionContainer = styled.section<{
  $linearBg: boolean;
  $fullHeight: boolean;
}>`
  display: flex;
  width: 100%;
  padding: 1.8rem 8.4rem;
  height: ${({ $fullHeight }) => ($fullHeight ? "calc(100vh - 84px)" : "auto")};
  position: relative;
  user-select: none;
  flex-direction: column;
  ${({ $linearBg }) =>
    $linearBg
      ? css`
          background: linear-gradient(
            90deg,
            ${({ theme }) => theme.colors.primaryColor} 67%,
            ${({ theme }) => theme.colors.secondaryColor} 33%
          );
        `
      : css`
          background: ${({ theme }) => theme.colors.primaryColor};
        `}

  @media (max-width: 58em) {
    background: ${({ theme }) => theme.colors.primaryColor};
    padding: 2.4rem;
    height: auto;
  }
`;
