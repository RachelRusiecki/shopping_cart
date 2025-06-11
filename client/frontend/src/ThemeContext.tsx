import { createContext, useState, useEffect, type ReactNode } from "react";

interface ThemeProps { children: ReactNode };

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
};
