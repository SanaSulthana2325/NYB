import { useState } from "react";
import Login from "./components/Login";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <DashboardLayout logout={() => setLoggedIn(false)} />
      ) : (
        <Login login={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default App;