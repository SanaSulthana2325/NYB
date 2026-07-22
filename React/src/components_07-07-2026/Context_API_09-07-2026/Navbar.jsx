import React, { useContext } from 'react'
import ThemeContext from './ThemeContext';

function Navbar() {
    const{ theme } = useContext(ThemeContext);
  return (
    <>
    <h2>Current Theme :{theme}</h2>
    </>
  )
}

export default Navbar;