"use client";
import React from "react";
import { styled } from "styled-components";
// import useIntersectionContext from "@/hooks/useIntersectionContext";

const Nav: React.FC = () => {
  // const {
  //   scrollTo,
  //   element1,
  //   element2,
  //   element3,
  //   element4,
  //   element5,
  //   inVP1,
  //   inVP2,
  //   inVP3,
  //   inVP4,
  //   inVP5,
  // } = useIntersectionContext();

  // console.log(element1);
  return (
    <NavContainer
      aria-label="Main navigation"
      // className={
      //   !inVP2 && !inVP3 && !inVP4 && !inVP5 && !inVP1
      //     ? "hide"
      //     : inVP1 || inVP3
      //     ? "primaryColor"
      //     : "secondaryColor"
      // }
    >
      <ul>
        <li>
          <button
            // onClick={() => scrollTo(element1)}
            type="button"
            aria-label="Go to first section."
            // className={
            //   !inVP2 && !inVP3 && !inVP4 && !inVP5 && inVP1 ? "current" : ""
            // }
          ></button>
        </li>
        <li>
          <button
            // onClick={() => scrollTo(element2)}
            type="button"
            aria-label="Go to second section"
            // className={
            //   !inVP1 && !inVP3 && !inVP4 && !inVP5 && inVP2 ? "current" : ""
            // }
          ></button>
        </li>
        <li>
          <button
            // onClick={() => scrollTo(element3)}
            type="button"
            aria-label="Go to third section"
            // className={
            // !inVP1 && !inVP2 && !inVP4 && !inVP5 && inVP3 ? "current" : ""
            // }
          ></button>
        </li>
        <li>
          <button
            // onClick={() => scrollTo(element4)}
            type="button"
            aria-label="Go to fourth section"
            // className={
            //   !inVP1 && !inVP2 && !inVP3 && !inVP5 && inVP4 ? "current" : ""
            // }
          ></button>
        </li>
        <li>
          <button
            // onClick={() => scrollTo(element5)}
            type="button"
            aria-label="Go to fifth section"
            // className={
            //   !inVP1 && !inVP2 && !inVP3 && !inVP4 && inVP5 ? "current" : ""
            // }
          ></button>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  z-index: 999;
  display: flex;
  position: fixed;
  top: 50%;
  right: 3.5rem;
  color: ${({ theme }) => theme.colors.primaryColor};

  &.primaryColor {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  &.secondaryColor {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  &.hide {
    display: none;
  }

  & ul {
    width: 0.71rem;
    height: 0.71rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  li {
    width: 0.75rem;
  }

  button {
    width: 100%;
    display: flex;
    width: inherit;
    cursor: pointer;
    min-height: 2em;
    position: relative;
    color: currentColor;
    transition-delay: 100ms;
    outline-color: transparent;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;

    &:after {
      content: "";
      width: 100%;
      height: 0.75rem;
      position: absolute;
      background-color: currentColor;
      border: 1px solid currentColor;
      -webkit-transition: -webkit-transform 0.2s 100ms;
      -webkit-transition: transform 0.2s 100ms;
      transition: transform 0.2s 100ms;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    &.current:after {
      transform: rotate(0) scale(2);
      background: transparent;
    }
  }

  @media (max-width: 41rem) {
    display: none;
  }
`;
