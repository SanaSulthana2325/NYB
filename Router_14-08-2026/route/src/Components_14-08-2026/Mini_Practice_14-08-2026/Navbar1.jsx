import { NavLink } from "react-router-dom";

export default function Navbar1() {
  const linkStyle = ({ isActive }) => ({
    marginRight: "15px",
    color: isActive ? "red" : "blue",
    textDecoration: "none"
  });

  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/students" style={linkStyle}>Students</NavLink>
      <NavLink to="/courses" style={linkStyle}>Courses</NavLink>
      <NavLink to="/login" style={linkStyle}>Login</NavLink>
      <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
    </nav>
  );
}