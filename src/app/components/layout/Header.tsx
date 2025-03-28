"use client";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Link from "next/link";
import {
  AnimatePresence,
  Variants,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { usePathname } from "next/navigation";
import useToggle from "@/hooks/useToggle";
import ToggleSwitch from "../Common/ToggleSwitch";
import ThemeSwitch from "./ThemeSwitch";

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
  // {
  //   id: 4,
  //   path: "/blog",
  //   pathname: "blog",
  // },
];

const socialLinks = [
  {
    id: 1,
    url: "https://t.me/cryptospacee",
    title: "TE",
  },
  {
    id: 2,
    url: "https://twitter.com/Dechain_Dev",
    title: "TW",
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/princewill-nwakanma-6a6a99181",
    title: "LN",
  },
  {
    id: 4,
    url: "https://github.com/ricqcodes",
    title: "GH",
  },
];

function isActiveLink(currentPathname: string, linkPath: string) {
  // Check if exactly matches
  if (currentPathname === linkPath) return true;
  // Check if it's a nested path (making sure to account for the root path case)
  if (linkPath !== "/" && currentPathname.startsWith(`${linkPath}/`))
    return true;
  return false;
}

const FramerLink = motion(Link);

const ulContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (i: number = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: i * 0,
    },
  }),
};
const child: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 80,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const Header = ({
  theme,
  themeToggler,
}: {
  theme: string;
  themeToggler: () => void;
}) => {
  const { handleToggle, toggle, buttonToggleRef, toggledElementRef } =
    useToggle({
      eventType: "click",
    });
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (toggle) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [toggle]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <HeaderContainer
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <NavLinks>
        {linkedArr.map((link) => (
          <FramerLink
            key={link.id}
            href={link.path}
            className={isActiveLink(pathname, link.path) ? "active" : ""}
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
      <RightContainer>
        <SocialContainer>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.url} target="_blank" rel="noreferrer noopener">
                {link.title}
              </a>
            </li>
          ))}
        </SocialContainer>
        <ToggleSwitch switchToggle={themeToggler}>
          <ThemeSwitch theme={theme} />
        </ToggleSwitch>
      </RightContainer>
      <Button
        ref={buttonToggleRef}
        type="button"
        role="button"
        aria-label="open & close menu"
        aria-controls="contact-menu"
        onClick={() => handleToggle()}
        className={toggle ? "open" : "close"}
      ></Button>
      <AnimatePresence>
        {toggle && (
          <Nav
            key="modal"
            ref={toggledElementRef}
            aria-label="Contact menu"
            className={"open"}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <NavContainer>
              <Ul initial="hidden" variants={ulContainer} animate="visible">
                {linkedArr.map((link) => (
                  <motion.div
                    key={link.id}
                    onClick={() => handleToggle("override", false)}
                    variants={child}
                  >
                    <Link href={link.pathname === "articles" ? "#" : link.path}>
                      <li>{link.pathname}</li>
                    </Link>
                  </motion.div>
                ))}
              </Ul>
              <BasicContact>
                <Span
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5,
                  }}
                >
                  Let&apos;s Connect
                </Span>
                <motion.ul
                  initial="hidden"
                  variants={ulContainer}
                  animate="visible"
                >
                  <motion.li variants={child}>
                    <a
                      data-link
                      href="mailto:princenwakanma1996@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mail Me
                    </a>
                  </motion.li>
                </motion.ul>
              </BasicContact>
            </NavContainer>
            <SocialContact>
              {socialLinks.map((link) => (
                <li key={link.id} data-link>
                  <a
                    data-link
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </SocialContact>
          </Nav>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled(motion.header)`
  padding: 1.8rem 8.4rem;
  display: flex;
  position: sticky;
  top: 0;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  align-items: center;
  /* font-family: monospace; */
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
  list-style-type: none;

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

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 50%;

  &:hover {
    color: px solid ${({ theme }) => theme.colors.primaryColor};
  }

  a {
    font-size: 3.6rem;
    font-weight: 600;
    /* font-family: monospace; */

    color: ${({ theme }) => theme.colors.secondaryColor};
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
  list-style-type: none;

  li {
    font-size: 1.6rem;
    font-weight: 600;

    a {
      text-decoration: underline;
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
  outline: none;

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

const Nav = styled(motion.nav)`
  display: flex;
  box-shadow: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 3.5rem;
  gap: 2rem;
  user-select: none;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

const Ul = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  justify-content: center;
  margin: 8rem 0 2rem;
  width: 100%;

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
      /* font-family: monospace; */
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

  ${HeaderContainer} ${Nav} & {
    margin: 0 0 5.6rem;
  }
`;

const Span = styled(motion.span)`
  color: #c6d2f6;
  letter-spacing: 0.25em;
  -webkit-text-transform: uppercase;
  text-transform: uppercase;
`;

const SocialContact = styled.ul`
  width: 100%;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
  /* margin-bottom: 4.6rem; */

  transition-delay: 600ms;
  transition: opacity, transform 0.3s;

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
  gap: 2.4rem;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.8rem;
`;
