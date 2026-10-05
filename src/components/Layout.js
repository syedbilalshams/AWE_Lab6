import React from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

// Applies conditional styling for the whole page based on theme
const Layout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={`app app-${theme}`}>
      <header className="header">
        <h1>Combined State Management</h1>
        <ThemeToggle />
      </header>
      <main className="grid">{children}</main>
    </div>
  );
};

export default Layout;
