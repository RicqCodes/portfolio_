import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") || theme;
    localTheme && setTheme(localTheme);
    document.body.classList.add(`${localTheme}-theme`);
  }, []);
  return { theme, themeToggler };
};
