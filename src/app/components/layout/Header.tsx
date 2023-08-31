"use client";
import React, { useEffect } from "react";
import { styled } from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import useToggle from "@/hooks/useToggle";

const linkedArr = [
  {
    id: 1,
    path: "/",
    pathname: "home",
  },
  {
    id: 2,
    path: "/about",
    pathname: "about",
  },
  {
    id: 3,
    path: "/projects",
    pathname: "projects",
  },
  {
    id: 4,
    path: "",
    pathname: "articles",
  },
];

const FramerLink = motion(Link);

const Header = () => {
  const { handleToggle, toggle, buttonToggleRef, toggledElementRef } =
    useToggle({
      eventType: "click",
    });
  const pathname = usePathname();

  useEffect(() => {
    if (toggle) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [toggle]);

  return (
    <HeaderContainer>
      <NavLinks>
        {linkedArr.map((link) => (
          <FramerLink
            key={link.id}
            href={link.path}
            className={pathname === link.path ? "active" : ""}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.1 }}
          >
            <li>{link.pathname}</li>
          </FramerLink>
        ))}
      </NavLinks>
      <Logo aria-label="Logo, go to homepage">
        <Link href="/">P.</Link>
      </Logo>
      <SocialContainer>
        <li>
          <a href="https://t.me/" target="_blank" rel="noreferrer noopener">
            &quot; TG &quot;
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Dechain_Dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            &quot; TW &quot;
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/princewill-nwakanma-6a6a99181"
            target="_blank"
            rel="noreferrer noopener"
          >
            &quot; LN &quot;
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/princewill-nwakanma-6a6a99181"
            target="_blank"
            rel="noreferrer noopener"
          >
            &quot; GH &quot;
          </a>
        </li>
      </SocialContainer>
      <Button
        ref={buttonToggleRef}
        type="button"
        aria-label="Open contact menu"
        aria-controls="contact-menu"
        onClick={() => handleToggle()}
        className={toggle ? "open" : "close"}
      ></Button>
      {toggle && (
        <Nav
          ref={toggledElementRef}
          aria-label="Contact menu"
          className={"open"}
        >
          <NavContainer>
            <Ul>
              {linkedArr.map((link) => (
                <Link
                  key={link.id}
                  href={link.pathname === "articles" ? "#" : link.path}
                  onClick={() => handleToggle("override", false)}
                >
                  <li>{link.pathname}</li>
                </Link>
              ))}
            </Ul>
            <BasicContact>
              <Span>Let&apos;s Connect</Span>
              <ul>
                <li>
                  <a
                    data-link
                    href="mailto:princenwakanma1996@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mail me
                  </a>
                </li>
              </ul>
            </BasicContact>
          </NavContainer>
          <SocialContact>
            <li data-link>
              <a
                data-link
                href="https://twitter.com/Dechain_Dev"
                target="_blank"
                rel="noreferrer noopener"
              >
                &quot; TE &quot;
              </a>
            </li>
            <li data-link>
              <a
                data-link
                href="https://twitter.com/Dechain_Dev"
                target="_blank"
                rel="noreferrer noopener"
              >
                &quot; TW &quot;
              </a>
            </li>
            <li data-link>
              <a
                data-link
                href="https://www.linkedin.com/in/princewill-nwakanma-6a6a99181"
                target="_blank"
                rel="noreferrer noopener"
              >
                &quot; LN &quot;
              </a>
            </li>
            <li data-link>
              <a
                data-link
                href="https://www.linkedin.com/in/princewill-nwakanma-6a6a99181"
                target="_blank"
                rel="noreferrer noopener"
              >
                &quot; GH &quot;
              </a>
            </li>
          </SocialContact>
        </Nav>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding: 4.8rem 8.4rem;
  display: flex;
  align-items: center;
  font-family: monospace;
  background-color: ${({ theme }) => theme.colors.primaryColor};

  width: 100%;
  display: flex;
  z-index: 1000;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 58em) {
    padding: 2.4rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  transition: all 0.3s ease-in;
  text-transform: capitalize;

  a {
    &.active {
      text-decoration: line-through;
      font-weight: 900;
      transition: all 0.3s ease-in;
    }
    li {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  @media (max-width: 58em) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 50%;

  a {
    font-size: 3.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.tertiaryColor};
  }

  @media (max-width: 34em) {
    height: 4.8rem;
    width: 4.8rem;
    a {
      font-size: 2.8rem;
    }
  }
`;

const SocialContainer = styled.ul`
  display: flex;
  gap: 2.4rem;

  li {
    font-size: 1.6rem;
    font-weight: 600;

    a {
      color: ${({ theme }) => theme.colors.secondaryColor};
    }
  }

  @media (max-width: 58em) {
    display: none;
  }
`;
const Button = styled.button`
  position: relative;
  display: none;
  width: 4rem;
  height: 3rem;
  background: none;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
  border: none;
  z-index: 9;

  @media (max-width: 58em) {
    display: inline;
  }

  &:before,
  &:after {
    content: "";
    @media (max-width: 41em) {
      background-color: ${({ theme }) => theme.colors.secondaryColor}!important;
    }
  }

  &.close:before,
  &.close:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    transition: 0.3s ease;
    transform: rotate(0deg);
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }

  &.close:before {
    content: "";
    top: 0;
    right: 0;
  }

  &.close:after {
    content: "";
    right: 0;
    width: 72%;
    top: 1.6rem;
  }

  &.open:before,
  &.open:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    transition: 0.3s ease;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }

  &.open:before {
    content: "";
    top: 1rem;
    right: 0;
    width: 75%;
    transform: rotate(45deg);
  }

  &.open:after {
    content: "";
    right: 0;
    top: 1rem;
    width: 75%;
    transform: rotate(-45deg);
  }

  @media (max-width: 34em) {
    &.close:before {
      content: "";
      width: 90%;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  box-shadow: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 3.5rem;
  justify-content: space-between;
  user-select: none;
  flex-direction: column;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.secondaryColor};

  ${HeaderContainer} &:not(.open) {
    opacity: 1;
    visibility: hidden;
    pointer-events: none;
  }

  &::before {
    ${HeaderContainer} &:not(.open):before {
      -webkit-transform: scaleX(0.3826) scaleY(0.27);
      -ms-transform: scaleX(0.3826) scaleY(0.27);
      transform: scaleX(0.3826) scaleY(0.27);
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8rem 0 2rem;
  transition-delay: 200ms;
  transition: opacity, transform 0.3s;

  ${HeaderContainer} ${Nav}:not(.open) & {
    transform: translateY(50px);
    opacity: 0;
    width: 100%;
  }

  ${HeaderContainer} & {
    line-height: 2.5;
    font-size: 1.8rem;
    font-weight: 400;
  }

  &,
  ol,
  li {
    list-style-type: none;
    padding: 0;

    a {
      color: ${({ theme }) => theme.colors.secondaryColor};
      font-size: 2rem;
      text-transform: capitalize;
    }
  }

  @media (hover: hover) and (any-pointer: fine) {
    a[data-link]:not(.nav-bullet) {
      position: relative;
    }
  }

  @media (hover: hover) and (any-pointer: fine) {
    a[data-link]:not(.nav-bullet):after {
      content: "";
      width: 100%;
      min-width: 1em;
      height: 100%;
      padding: 0.5rem;
      opacity: 0;
      top: 0;
      right: 0;
      transform: translateX(0);
      transform-origin: left;
      transition: 0.3s;
      position: absolute;
      pointer-events: none;
      background-color: currentColor;
    }
  }
`;

const BasicContact = styled.div`
  width: 100%;
  font-size: 1.58rem;
  text-align: center;
  line-height: 2.5;
  position: relative;

  ${HeaderContainer} ${Nav} & {
    margin-top: 1.267rem;
  }

  ul {
    font-size: 1.82rem;
    font-weight: 400;

    ${HeaderContainer} ${Nav}:not(.open) & {
      -webkit-transform: translateY(40px);
      -ms-transform: translateY(40px);
      transform: translateY(40px);
    }

    &,
    ol,
    li {
      list-style-type: none;
      padding: 0;
    }

    a {
      color: ${({ theme }) => theme.colors.secondaryColor};
      font-size: 2rem;
    }

    @media (hover: hover) and (any-pointer: fine) {
      a[data-link]:not(.nav-bullet) {
        position: relative;
      }
    }

    @media (hover: hover) and (any-pointer: fine) {
      a[data-link]:not(.nav-bullet):after {
        content: "";
        width: 100%;
        min-width: 1em;
        height: 100%;
        padding: 0.5rem;
        opacity: 0;
        top: 0;
        right: 0;
        transform: translateX(0);
        transform-origin: left;
        transition: 0.3s;
        position: absolute;
        pointer-events: none;
        background-color: currentColor;
      }
    }
  }

  ${HeaderContainer} ${Nav}:not(.open) & {
    opacity: 0;
  }

  ${HeaderContainer} ${Nav} & {
    margin: 0 0 5.6rem;
  }
`;

const Span = styled.span`
  color: #c6d2f6;
  letter-spacing: 0.25em;
  -webkit-text-transform: uppercase;
  text-transform: uppercase;

  ${HeaderContainer} ${Nav}:not(.open) ${BasicContact} & {
    opacity: 0;
  }
`;

const SocialContact = styled.ul`
  width: 100%;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;

  transition-delay: 600ms;
  transition: opacity, transform 0.3s;

  ${HeaderContainer} ${Nav}:not(.open) & {
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
    opacity: 0;
  }

  & li:not(:last-of-type) {
    /* margin-right: 3.56rem; */
  }

  li {
    display: inline-block;
    font-size: 1.4rem;
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-align: center;
  }

  @media (hover: hover) and (any-pointer: fine) {
    a[data-link]:not(.nav-bullet) {
      position: relative;
    }
  }

  @media (hover: hover) and (any-pointer: fine) {
    a[data-link]:not(.nav-bullet):after {
      content: "";
      width: 100%;
      min-width: 1em;
      height: 100%;
      padding: 0.5rem;
      opacity: 0;
      top: 0;
      right: 0;
      transform: translateX(0);
      transform-origin: left;
      transition: 0.3s;
      position: absolute;
      pointer-events: none;
      background-color: currentColor;
    }
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
