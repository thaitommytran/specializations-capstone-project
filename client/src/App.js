import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./Layout";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

import "./App.css";

function App() {
  const [session, setSession] = useState();

  const handleLogin = (value) => {
    setSession(value);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("session");
    setSession();
  };

  useEffect(() => {
    // Check local storage to see if session exists
    const localStorageSession = JSON.parse(
      window.localStorage.getItem("session")
    );
    // Get time now in miliseconds
    const now = new Date().getTime();

    // If time now is greater than session expiry,
    if (now > localStorageSession?.expiry) {
      // then session is expired so remove from local storage
      window.localStorage.removeItem("session");
    } else {
      // else, set session as local storage value
      setSession(localStorageSession?.value);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="login"
            element={
              !session ? (
                <LoginPage onLogin={handleLogin} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          <Route
            index
            element={
              session ? (
                <HomePage onLogout={handleLogout} userId={session} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
