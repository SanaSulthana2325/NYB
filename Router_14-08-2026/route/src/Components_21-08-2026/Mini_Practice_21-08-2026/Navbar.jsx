import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>Student Portal</h2>

      <div className="links">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/students">
          Students
        </NavLink>

        <NavLink to="/courses">
          Courses
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/search?name=React">
          Search
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;