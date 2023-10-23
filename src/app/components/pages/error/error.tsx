"use client"; // Error components must be Client Components

import { useEffect } from "react";
import ErrorpageContainer from "./_molecules/errorpageContainer";
import { styled } from "styled-components";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorpageContainer>
      <ErrorContainer>
        <h2>Something went wrong!</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </ErrorContainer>
    </ErrorpageContainer>
  );
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    text-transform: capitalize;
  }

  button {
    padding: 1rem 3rem;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.tertiaryColor};
    font-size: 1.6rem;
    border-radius: 8px;
  }
`;
