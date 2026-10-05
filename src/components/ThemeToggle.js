import React from "react";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button variant="secondary" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
    </Button>
  );
};

export default ThemeToggle;
