import { useEffect, useState } from "react";

// set up detection of system dark mode
const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

export const useDarkMode = () => {
  // perform an initial detection of system theme
  const [theme, setTheme] = useState(darkModeQuery.matches ? "dark" : "light");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    darkModeQuery.addEventListener("change", (event) => {
      setMode(event.matches ? "dark" : "light");
    });
  });

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") || theme;
    localTheme && setTheme(localTheme);
  }, []);
  return { theme, themeToggler };
};
