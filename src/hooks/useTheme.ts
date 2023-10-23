import { useEffect, useState } from "react";

// set up detection of system dark mode

export const useDarkMode = () => {
  // perform an initial detection of system theme
  const [theme, setTheme] = useState("");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(darkModeQuery.matches ? "dark" : "light");

    darkModeQuery.addEventListener("change", (event) => {
      setMode(event.matches ? "dark" : "light");
    });
  }, []);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") || theme;
    localTheme && setTheme(localTheme);
  }, [theme]);
  return { theme, themeToggler };
};
