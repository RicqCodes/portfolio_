"use client";
import React, { useState } from "react";
import { styled } from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

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
    path: "/articles",
    pathname: "articles",
  },
];

const FramerLink = motion(Link);

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <HeaderContainer>
      <NavLinks>
        {linkedArr.map((link) => (
          <FramerLink
            key={link.id}
            href={link.pathname === "articles" ? "#" : link.path}
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
        type="button"
        aria-label="Open contact menu"
        aria-controls="contact-menu"
        onClick={handleToggle}
        className={open ? "open" : "close"}
      ></Button>
      {/* <Nav aria-label="Contact menu" className={open ? "open" : "close"}>
        <Ul itemScope itemType="http://schema.org/SiteNavigationElement">
          <li>
            <Link  href="/work">
              Work
            </Link>
          </li>
          <li>
            <Link  href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link data-link href="/resume">
              Resume
            </Link>
          </li>
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
            <li>
              <a
                data-link
                href="https://t.me/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Telegram
              </a>
            </li>
          </ul>
        </BasicContact>
        <SocialContact>
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
      </Nav> */}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding: 1.8rem 8.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media (max-width: 58em) {
    display: inline;
  }

  &:before,
  &:after {
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

  ${HeaderContainer} &.close:before {
    top: 0;
    right: 0;
  }

  ${HeaderContainer} &.close:after {
    right: 0;
    width: 72%;
    top: 1.6rem;
  }

  ${HeaderContainer} &.open:before,
  ${HeaderContainer} &.open:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    transition: 0.3s ease;
    /* transform: rotate(0deg); */
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }

  ${HeaderContainer} &.open:before {
    top: 1rem;
    right: 0;
    width: 75%;
    transform: rotate(45deg);
  }

  ${HeaderContainer} &.open:after {
    right: 0;
    top: 1rem;
    width: 75%;
    transform: rotate(-45deg);
  }
`;

// const Nav = styled.nav`
//   display: flex;
//   box-shadow: none;
//   padding: 5.5rem;
//   user-select: none;
//   flex-direction: column;
//   background-color: #fff;
//   color: ${({ theme }) => theme.colors.secondaryColor};

//   ${HeaderContainer} &:not(.open) {
//     opacity: 1;
//     visibility: hidden;
//     pointer-events: none;
//   }

//   ${HeaderContainer} & {
//     top: 2.2rem;
//     right: 5.41rem;
//     width: 35.223rem;
//     font-size: 1.58rem;
//     position: absolute;
//     transition: opacity 0.4s, box-shadow 0.4s;

//     @media (max-width: 504px) {
//       height: 100vh;
//       width: 80%;
//       top: 0;
//       right: 0;
//       margin: auto;
//     }
//   }

//   &::before {
//     ${HeaderContainer} &:not(.open):before {
//       -webkit-transform: scaleX(0.3826) scaleY(0.27);
//       -ms-transform: scaleX(0.3826) scaleY(0.27);
//       transform: scaleX(0.3826) scaleY(0.27);
//     }
//   }
// `;

// const Ul = styled.ul`
//   ${HeaderContainer} ${Nav}:not(.open) & {
//     transform: translateY(50px);
//     opacity: 0;
//     width: 100%;
//   }

//   ${HeaderContainer} ${Nav} & {
//     margin: 2.18rem 0;
//     transition-delay: 200ms;
//     transition: opacity, transform 0.3s;
//   }

//   ${HeaderContainer} & {
//     line-height: 2.5;
//     font-size: 1.8rem;
//     font-weight: 400;
//   }

//   &,
//   ol,
//   li {
//     list-style-type: none;
//     padding: 0;

//     a {
//       color: ${({ theme }) => theme.colors.secondaryColor};
//     }
//   }

//   @media (hover: hover) and (any-pointer: fine) {
//     a[data-link]:not(.nav-bullet) {
//       position: relative;
//     }
//   }

//   @media (hover: hover) and (any-pointer: fine) {
//     a[data-link]:not(.nav-bullet):after {
//       content: "";
//       width: 100%;
//       min-width: 1em;
//       height: 100%;
//       padding: 0.5rem;
//       opacity: 0;
//       top: 0;
//       right: 0;
//       transform: translateX(0);
//       transform-origin: left;
//       transition: 0.3s;
//       position: absolute;
//       pointer-events: none;
//       background-color: currentColor;
//     }
//   }
// `;

// const BasicContact = styled.div`
//   font-size: 1.58rem;
//   line-height: 2.5;
//   position: relative;

//   ${HeaderContainer} ${Nav} & {
//     margin-top: 1.267rem;
//   }

//   ul {
//     font-size: 1.82rem;
//     font-weight: 400;

//     ${HeaderContainer} ${Nav}:not(.open) & {
//       -webkit-transform: translateY(40px);
//       -ms-transform: translateY(40px);
//       transform: translateY(40px);
//     }

//     &,
//     ol,
//     li {
//       list-style-type: none;
//       padding: 0;
//     }

//     a {
//       color: ${({ theme }) => theme.colors.secondaryColor};
//     }

//     @media (hover: hover) and (any-pointer: fine) {
//       a[data-link]:not(.nav-bullet) {
//         position: relative;
//       }
//     }

//     @media (hover: hover) and (any-pointer: fine) {
//       a[data-link]:not(.nav-bullet):after {
//         content: "";
//         width: 100%;
//         min-width: 1em;
//         height: 100%;
//         padding: 0.5rem;
//         opacity: 0;
//         top: 0;
//         right: 0;
//         transform: translateX(0);
//         transform-origin: left;
//         transition: 0.3s;
//         position: absolute;
//         pointer-events: none;
//         background-color: currentColor;
//       }
//     }
//   }

//   ${HeaderContainer} ${Nav}:not(.open) & {
//     opacity: 0;
//   }

//   ${HeaderContainer} ${Nav} & {
//     margin: 0 0 5.6rem;
//   }
// `;

// const Span = styled.span`
//   color: #c6d2f6;
//   letter-spacing: 0.25em;
//   -webkit-text-transform: uppercase;
//   text-transform: uppercase;

//   ${HeaderContainer} ${Nav}:not(.open) ${BasicContact} & {
//     opacity: 0;
//   }
// `;

// const SocialContact = styled.ul`
//   padding: 0;
//   position: relative;

//   ${HeaderContainer} ${Nav}:not(.open) & {
//     -webkit-transform: translateY(30px);
//     -ms-transform: translateY(30px);
//     transform: translateY(30px);
//     opacity: 0;
//   }

//   ${HeaderContainer} ${Nav} & {
//     transition-delay: 600ms;
//     transition: opacity, transform 0.3s;
//     font-size: 1.42rem;
//   }

//   & li:not(:last-of-type) {
//     margin-right: 3.56rem;
//   }

//   li {
//     display: inline-block;
//   }

//   a {
//     color: ${({ theme }) => theme.colors.secondaryColor};
//   }

//   @media (hover: hover) and (any-pointer: fine) {
//     a[data-link]:not(.nav-bullet) {
//       position: relative;
//     }
//   }

//   @media (hover: hover) and (any-pointer: fine) {
//     a[data-link]:not(.nav-bullet):after {
//       content: "";
//       width: 100%;
//       min-width: 1em;
//       height: 100%;
//       padding: 0.5rem;
//       opacity: 0;
//       top: 0;
//       right: 0;
//       transform: translateX(0);
//       transform-origin: left;
//       transition: 0.3s;
//       position: absolute;
//       pointer-events: none;
//       background-color: currentColor;
//     }
//   }
// `;
