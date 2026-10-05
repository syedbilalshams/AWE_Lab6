import React from "react";
import { useTheme } from "../context/ThemeContext";

// Reusable themed button; variant = "primary" | "secondary"
const Button = ({ onClick, children, variant = "primary" }) => {
  const { theme } = useTheme();
  return (
    <button className={`btn btn-${variant} btn-${theme}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
