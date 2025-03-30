import { useTheme } from "../contexts/ThemeContext";

function ButtonDarkMode() {
  const { isDarkMode, setDarkMode } = useTheme();
  return (
    <button
      onClick={() => setDarkMode((iseDark) => !iseDark)}
      className="btn-fake-dark-mode"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ButtonDarkMode;
