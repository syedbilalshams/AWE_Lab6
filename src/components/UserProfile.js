import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import Card from "./Card";
import Button from "./Button";

// Consumes Context API (user state)
const UserProfile = () => {
  const { user, login, logout } = useUser();
  const [name, setName] = useState("");

  const handleLogin = () => {
    login(name.trim() || "Ali Khan");
    setName("");
  };

  return (
    <Card title="User (Context API)">
      <p>
        Current user: <strong>{user.name}</strong>{" "}
        <span className={user.loggedIn ? "badge on" : "badge off"}>
          {user.loggedIn ? "Logged in" : "Logged out"}
        </span>
      </p>
      {user.loggedIn ? (
        <Button variant="secondary" onClick={logout}>Logout</Button>
      ) : (
        <div className="row">
          <input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      )}
    </Card>
  );
};

export default UserProfile;
