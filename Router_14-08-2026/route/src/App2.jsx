import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./Components_21-08-2026/Mini_Practice_21-08-2026/Navbar"
import ProtectedRoute from "./Components_21-08-2026/Mini_Practice_21-08-2026/ProtectedRouter";

import Home from "./Components_21-08-2026/Mini_Practice_21-08-2026/Home";
import Students from "./Components_21-08-2026/Mini_Practice_21-08-2026/Students";
import StudentDetails from "./Components_21-08-2026/Mini_Practice_21-08-2026/StudentDetails";
import Courses from "./Components_21-08-2026/Mini_Practice_21-08-2026/Courses";
import About from "./Components_21-08-2026/Mini_Practice_21-08-2026/About";
import Dashboard from "./Components_21-08-2026/Mini_Practice_21-08-2026/Dashboard";
import Profile from "./Components_21-08-2026/Mini_Practice_21-08-2026/Profile";
import Search from "./Components_21-08-2026/Mini_Practice_21-08-2026/Search";
import NotFound from "./Components_21-08-2026/Mini_Practice_21-08-2026/NotFound";

function App2() {
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <main className="container">
        <Routes>

          {/* Normal Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />

          {/* Dynamic Route */}
          <Route
            path="/students/:id"
            element={<StudentDetails />}
          />

          {/* Query Parameter */}
          <Route
            path="/search"
            element={<Search />}
          />

          {/* Protected + Nested Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route
                path="profile"
                element={<Profile />}
              />
            </Route>
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>
      </BrowserRouter>
    </>
  );
}

export default App2;