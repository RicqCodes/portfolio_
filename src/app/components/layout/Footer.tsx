"use client";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer data-section="footer">
      <InnerContainer>
        <a
          href="https://www.linkedin.com/in/princewill-nwakanma-6a6a99181"
          target="_blank"
          rel="noreferrer"
        >
          come say hi
        </a>
        <p>
          Built with <span className="heart">❤️</span> by Ricqcodes
        </p>
        <span>{currentYear} © All Rights Reserved.</span>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2.4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondaryColor};
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8.4rem;
  font-weight: 600;

  @media (max-width: 51em) {
    padding: 0;
  }

  @media (max-width: 41em) {
    flex-direction: column;
    gap: 1.4rem;
  }

  a {
    font-size: 1.6rem;
    text-transform: capitalize;

    &:hover {
      text-decoration: underline;
    }
  }

  p,
  span {
    font-size: 1.6rem;
  }
`;
