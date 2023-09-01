"use client";

import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "../theme";

const GlobalStyles = createGlobalStyle`


html {
        font-size: 62.5%;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;


        &::-webkit-scrollbar {
        display: none;
        }
    }

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

body {
        font: inherit;
        position: relative;
        background: ${({ theme }) => theme.colors.primaryColor};
        line-height: 1;
        color: ${({ theme }) => theme.colors.secondaryColor};
        -webkit-font-smoothing: antialiased;
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100vh;
        font-weight: normal;
        line-height: inherit;
        -webkit-box-pack: start;
        -moz-osx-font-smoothing: inherit;
    }

button, [type='button'], [type='reset'], [type='submit'] {
    -webkit-appearance: button;
}

input, button, textarea {
    border-radius: 0;
    -webkit-tap-highlight-color: transparent;
}

button, [type='button'], [type='reset'], [type='submit'] {
    -webkit-appearance: button;
}

input, button, textarea {
    border-radius: 0;
    -webkit-tap-highlight-color: transparent;
}
button, [role='button'] input[type='submit'] {
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

button, select {
    -webkit-text-transform: none;
    text-transform: none;
}

button, input {
    overflow: visible;
}

button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}

ul, ol, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    transition-duration: 300ms;
    transition-property: opacity, color, background-color, transform, border;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-decoration: none;

        &:hover, 
        &:visited, 
        &:focus {
            text-decoration: none;
    }
}

p {
        font-size: 16px;
        line-height:32px;

        @media (max-width: 548px) {
        font-size: 18px;
       }
    }

    small {
        font-size: 12px;

        @media (max-width: 548px) {
        font-size: 14px;
       }
    }

    h1 {
        font-size: 38px;
        font-weight: 500;
    }

    h2 {
        font-size: 33px;
        font-weight: 400;
    }

    h3 {
        font-size: 28px;
        font-weight: 400;
    }

    h4 {
        font-size: 23px;
        font-weight: 400;
    }

    h5 {
        font-size: 18px;
        font-weight: 400;
    }

`;

export default GlobalStyles;
