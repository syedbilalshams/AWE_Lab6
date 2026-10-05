import React from "react";
import { useSelector } from "react-redux";
import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";
import Card from "./Card";

// Consumes BOTH Context API (user, theme) and Redux (counter)
const Dashboard = () => {
  const { user } = useUser();
  const { theme } = useTheme();
  const count = useSelector((state) => state.count);

  return (
    <Card title="Summary (Context + Redux)">
      <p>
        <strong>{user.name}</strong> has clicked the counter to{" "}
        <strong>{count}</strong> while using the <strong>{theme}</strong> theme.
      </p>
    </Card>
  );
};

export default Dashboard;
