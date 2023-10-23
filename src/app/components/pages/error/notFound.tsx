"use client";
import Link from "next/link";
import ErrorpageContainer from "./_molecules/errorpageContainer";
import styled from "styled-components";
import { IoIosWarning } from "react-icons/io";

export default function NotFound() {
  return (
    <ErrorpageContainer>
      <NotFoundContainer>
        <Top>
          <h2>page not found</h2>
          <p>We&apos;re sorry, we couldn&apos;t find that page </p>
        </Top>
        <Bottom>
          <Link href="/">Go to home page</Link>
          <p>Report a broken link</p>
        </Bottom>
      </NotFoundContainer>
    </ErrorpageContainer>
  );
}

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    text-transform: capitalize;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.3rem;
  }

  a {
    padding: 1rem 3rem;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.tertiaryColor};
    font-size: 1.6rem;
    border-radius: 8px;
  }
`;
