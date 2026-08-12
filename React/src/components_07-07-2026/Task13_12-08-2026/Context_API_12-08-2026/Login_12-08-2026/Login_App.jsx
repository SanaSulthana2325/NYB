import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { AuthContext } from "./AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Dashboard />
    </AuthContext.Provider>
  );
}

export default App;