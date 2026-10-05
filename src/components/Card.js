import React from "react";
import { useTheme } from "../context/ThemeContext";

// Reusable themed container
const Card = ({ title, children }) => {
  const { theme } = useTheme();
  return (
    <section className={`card card-${theme}`}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Card;
