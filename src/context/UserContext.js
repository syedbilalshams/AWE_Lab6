import React, { createContext, useContext, useState } from "react";

// 1. Create the context
export const UserContext = createContext(null);

// 2. Provider component that owns the user state
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Guest", loggedIn: false });

  const login = (name) => setUser({ name, loggedIn: true });
  const logout = () => setUser({ name: "Guest", loggedIn: false });

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Custom hook for easy consumption
export const useUser = () => useContext(UserContext);
