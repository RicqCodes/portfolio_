"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer path={pathname} data-section="footer">
      <InnerContainer>
        <ContactMe>
          <h3>Say Hi</h3>
          <MainContainer>
            <ul>
              <li>
                <a href="malito:nwakanmaprince1996@gmail.com">Email Me</a>
              </li>
              <li>
                <a href="t.me/crytomaniaac">I am on Telegram</a>
              </li>
              <li>
                <a href="@">I am on Whatsapp</a>
              </li>
            </ul>
            <RightContainer>
              <Link href="">My Past Work</Link>
              <Link href="">My Personal Blog</Link>
              <Link href="">My Resume</Link>
            </RightContainer>
          </MainContainer>
        </ContactMe>
        <Divider></Divider>
        <FootNote>
          <p>© Prince Nwakanma {currentYear}</p>
          <Socials>
            <li>
              <a href="/" target="_blank" rel="noreferrer">
                GH
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noreferrer">
                TW
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noreferrer">
                LN
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noreferrer">
                YT
              </a>
            </li>
          </Socials>
        </FootNote>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;

interface Ipath {
  path?: string;
}

export const FooterContainer = styled.footer<Ipath>`
  height: 100vh;
  scroll-snap-align: ${(props) => (props?.path === "/" ? "start" : "none")};
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  display: flex;
  align-items: center;

  @media (max-width: 41em) {
    scroll-snap-align: none;
    height: auto;
    margin-top: 8rem;
  }
`;

export const InnerContainer = styled.div`
  padding: 14rem;
  width: 100%;
  margin: auto;

  @media (max-width: 39em) {
    padding: 2.4rem;
  }
`;

export const ContactMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 13.6rem;

  h3 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.8rem;

    li {
      a {
        color: #fff;
      }
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  gap: 24rem;

  @media (max-width: 39em) {
    gap: 4rem;
  }

  @media (max-width: 32em) {
    flex-direction: column;
    gap: 8rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.8rem;
    color: #fff;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.4);
`;

export const FootNote = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5.5rem;
  color: #fff;
  font-size: 1.8rem;
`;

export const Socials = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;

  li {
    a {
      color: #fff;
    }
  }

  @media (max-width: 32em) {
    display: none;
  }
`;
