import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}

export default ThemeProvider;
