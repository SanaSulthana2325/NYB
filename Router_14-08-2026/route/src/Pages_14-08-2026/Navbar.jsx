import {Link} from "react-router-dom";
import React from 'react'

function Navbar() {
  return (
    <>
    <nav>
        <Link to="/home">Home</Link> ||
        <Link to="/about" >About</Link> ||
        <Link to="/contact">Contact</Link>
    </nav>
    </>
  )
}

export default Navbar