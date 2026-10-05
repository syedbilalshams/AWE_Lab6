import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <Layout>
            <UserProfile />
            <Counter />
            <Dashboard />
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
